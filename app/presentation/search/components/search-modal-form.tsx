import { Form, useNavigate, useSearchParams } from "@remix-run/react";
import { SearchIcon, X } from "lucide-react";
import { Input } from "~/presentation/ui/input";
import { ExistingSearchParams } from "~/application/search/existing-search-params";
import { Button } from "~/presentation/ui/button";
import { useCallback, useEffect, useState } from "react";
import { UniteLegalHistoryItem } from "~/application/unite-legal/unite-legal-history-store";

export default function SearchModalForm({ setIsOpen, handleChangeCurrentHistoryItem, currentHistoryItem }: { setIsOpen: (bool: boolean) => void, handleChangeCurrentHistoryItem: (action: 'prev' | 'next') => void, currentHistoryItem: UniteLegalHistoryItem | null }) {

    const navigate = useNavigate();
    let [searchParams] = useSearchParams();
    let query = searchParams.get('terme') || '';

    const [value, setValue] = useState(query ?? '')

    const handleOnKeydown = useCallback((event: any) => {

        if (event.key === 'ArrowDown') {
            event.preventDefault()
            handleChangeCurrentHistoryItem('next')
        }
        if (event.key === 'ArrowUp') {
            event.preventDefault()
            handleChangeCurrentHistoryItem('prev')
        }
        if (event.key === 'Enter') {
            if (currentHistoryItem) {
                if (value === currentHistoryItem.name) {
                    event.preventDefault()

                    setIsOpen(false)
                    navigate(`/entreprise/${currentHistoryItem.ridet}`)
                }
            }
        }
    }, [currentHistoryItem, value])

    useEffect(() => {
        window.document.addEventListener('keydown', handleOnKeydown)

        return () => {
            window.document.removeEventListener('keydown', handleOnKeydown)
        }
    }, [currentHistoryItem, value])

    useEffect(() => {
        if (currentHistoryItem) {
            setValue(currentHistoryItem.name)
        }
    }, [currentHistoryItem])

    return (
        <Form method="GET" action="/rechercher" className="w-full py-2 border-b-[1px] border-zinc-300">
            <ExistingSearchParams exclude={["terme", "page"]} />
            <div className="flex w-full items-center relative">
                <SearchIcon className="w-5 h-5 text-blue-dinum absolute left-4" />
                <Input value={value} onChange={(e) => setValue(e.currentTarget.value)} className="!ps-12 shadow-none border-0 p-4 py-6 focus-visible:outline-none focus-visible:ring-0 outline-none ring-0" type="text" name="terme" placeholder="Nom, adresse, n° RIDET..." />
                <Button onClick={() => setIsOpen(false)} className="absolute right-4"><SearchIcon className="w-5 h-5" /></Button>
            </div>
        </Form>
    )
}
