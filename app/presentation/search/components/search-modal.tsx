import { ArrowUp, ArrowDown } from "lucide-react"
import { useLocation } from "@remix-run/react"

import { Button } from "../../ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogTitle,
} from "../../ui/dialog"
import SearchBar from "./search-bar"
import { useEffect, useState } from "react"
import SearchModalForm from "./search-modal-form"
import SearchModalHistory from "./search-modal-history"
import SearchAdvancesLink from "./search-advanced-link"
import { getUniteLegalHistoryFromLocalStorage, UniteLegalHistoryItem } from "~/application/unite-legal/unite-legal-history-store"

export default function SearchModal() {

    const location = useLocation()

    const [isOpen, setIsOpen] = useState(false)
    const [history, setHistory] = useState<UniteLegalHistoryItem[]>([])
    const [currentHistoryItem, setCurrentHistoryItem] = useState<UniteLegalHistoryItem | null>(null)

    useEffect(() => {
        const currentHistory = getUniteLegalHistoryFromLocalStorage()
        setHistory(currentHistory)
    }, [])

    useEffect(() => {
        setCurrentHistoryItem(null)
    }, [isOpen])

    useEffect(() => {
        setIsOpen(false)
    }, [location])

    const handleChangeCurrentHistoryItem = (action: 'prev' | 'next') => {
        if (history) {
            if (action === 'next') {
                if (!currentHistoryItem) {
                    setCurrentHistoryItem(history[0])
                } else {
                    const current = history.findIndex(item => item.name === currentHistoryItem.name)

                    if (history[current + 1]) {
                        setCurrentHistoryItem(history[current + 1])
                    }
                }
            }
            if (action === 'prev') {
                if (currentHistoryItem) {
                    const current = history.findIndex(item => item.name === currentHistoryItem.name)

                    if (history[current - 1]) {
                        setCurrentHistoryItem(history[current - 1])
                    }
                }
            }
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <div className="w-full" onClick={() => setIsOpen(true)}>
                <SearchBar withoutOutline={true} />
            </div>
            <DialogContent className="flex flex-col gap-4 sm:max-w-xl p-2 bg-transparent !focus-visible:ring-0">
                <div className="hidden">
                    <DialogTitle>Barre de recherche</DialogTitle>
                    <DialogDescription>
                        Barre de recherche de l'application Annuaire des entreprises de Nouvelle-Calédonie
                    </DialogDescription>
                </div>
                <div className="flex flex-col bg-white overflow-hidden rounded-lg border-2 border-blue-dinum md:scale-110 pulse">
                    <SearchModalForm setIsOpen={setIsOpen} handleChangeCurrentHistoryItem={handleChangeCurrentHistoryItem} currentHistoryItem={currentHistoryItem} />
                    <div className="flex items-center justify-between bg-slate-100 p-4 py-2">
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-normal text-primary">Naviguer</span>
                            <div className="flex items-center gap-1">
                                <Button variant="keyboard" onClick={() => handleChangeCurrentHistoryItem('prev')}>
                                    <ArrowUp className="!w-4 !h-4 text-primary" />
                                </Button>
                                <Button variant="keyboard" onClick={() => handleChangeCurrentHistoryItem('next')}>
                                    <ArrowDown className="!w-4 !h-4 text-primary" />
                                </Button>
                            </div>
                        </div>
                        <DialogClose asChild>
                            <Button variant="keyboard">
                                Fermer
                            </Button>
                        </DialogClose>
                    </div>
                </div>
                <div className="bg-zinc-50 rounded-lg flex flex-col divide-y-1 overflow-hidden">
                    <SearchModalHistory history={history} currentHistoryItem={currentHistoryItem} />
                    <div className="flex items-center justify-center p-2 bg-white">
                        <SearchAdvancesLink />
                    </div>
                </div>
            </DialogContent>
        </Dialog>

    )
}
