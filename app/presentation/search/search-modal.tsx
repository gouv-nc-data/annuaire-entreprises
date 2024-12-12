import { ArrowUp, ArrowDown } from "lucide-react"
import { useLocation } from "@remix-run/react"

import { Button } from "../ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogTitle,
} from "../ui/dialog"
import SearchBar from "./search-bar"
import { useEffect, useState } from "react"
import SearchModalForm from "./search-modal-form"
import SearchModalHistory from "./search-modal-history"
import SearchAdvancesLink from "./search-advanced-link"
import { getUniteLegaleHistoryFromLocalStorage, UniteLegaleHistoryItem } from "~/application/unite-legale/unite-legale-history-store"
import { SearchResults } from "~/domain/entity/search-results"
import { SearchModalResultsList } from "./search-modal-results"

export default function SearchModal() {

    const location = useLocation()

    const [isOpen, setIsOpen] = useState(false)
    const [history, setHistory] = useState<UniteLegaleHistoryItem[]>([])
    const [currentSelectedItem, setCurrentSelectedItem] = useState<UniteLegaleHistoryItem | null>(null)
    const [searchResults, setSearchResults] = useState<SearchResults | null>(null)
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        const currentHistory = getUniteLegaleHistoryFromLocalStorage()
        setHistory(currentHistory)
    }, [])

    useEffect(() => {
        setCurrentSelectedItem(null)
    }, [isOpen])

    useEffect(() => {
        setIsOpen(false)
    }, [location])

    // bind command + k
    useEffect(() => {
        let listener = (event: KeyboardEvent) => {
            if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
                event.preventDefault()
                setIsOpen(true)
            }
        }
        window.addEventListener('keydown', listener)
        return () => window.removeEventListener('keydown', listener)
    }, [])

    const handleChangeCurrentHistoryItem = (action: 'prev' | 'next') => {

        let items = [] as any[]

        console.log(searchResults?.results)

        if (history && history.length > 0) {
            items = [...history.map(item => item.rid)]
        }

        if (searchResults && searchResults.total_results > 0) {
            items = [...searchResults.results.map(item => item.rid)]
        }

        if (items && items.length > 0) {
            if (action === 'next') {
                if (!currentSelectedItem) {
                    setCurrentSelectedItem(items[0])
                } else {
                    const current = items.findIndex(rid => rid === currentSelectedItem)

                    if (items[current + 1]) {
                        setCurrentSelectedItem(items[current + 1])
                    }
                }
            }
            if (action === 'prev') {
                if (currentSelectedItem) {
                    const current = items.findIndex(rid => rid === currentSelectedItem)

                    if (items[current - 1]) {
                        setCurrentSelectedItem(history[current - 1])
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
            <DialogContent className="flex flex-col gap-6 sm:max-w-xl p-2 bg-transparent !focus-visible:ring-0">
                <div className="hidden">
                    <DialogTitle>Barre de recherche</DialogTitle>
                    <DialogDescription>
                        Barre de recherche de l'application Annuaire des entreprises de Nouvelle-Calédonie
                    </DialogDescription>
                </div>
                <div className="relative flex flex-col bg-white overflow-hidden rounded-2xl ring-4 ring-offset-0 ring-blue-dinum/5 border-2 border-blue-dinum">
                    <SearchModalForm
                        setIsOpen={setIsOpen}
                        handleChangeCurrentHistoryItem={handleChangeCurrentHistoryItem}
                        currentHistoryItem={currentSelectedItem}
                        handleChangeSearchResults={setSearchResults}
                        handleChangeSearchValue={setSearchValue}
                    />
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
                <div className="gap-0 bg-zinc-50 rounded-2xl flex flex-col divide-y-1 divide-slate-300 overflow-hidden ring-6 ring-blue-50">
                    {searchResults &&
                        <div className="flex flex-col divide-y-1 overflow-hidden">
                            <SearchModalResultsList
                                searchResults={searchResults}
                                searchValue={searchValue}
                            />
                        </div>
                    }
                    {history && history.length > 0 &&
                        <div className="flex flex-col divide-y-1 overflow-hidden">
                            <SearchModalHistory history={history} currentHistoryItem={currentSelectedItem} />
                        </div>
                    }
                    {/* {(searchResults && searchResults.total_results > 0) || (history && history.length > 0) && */}
                    <div className="flex items-center justify-center p-2 bg-white">
                        <SearchAdvancesLink />
                    </div>
                    {/* } */}
                </div>
            </DialogContent>
        </Dialog>

    )
}
