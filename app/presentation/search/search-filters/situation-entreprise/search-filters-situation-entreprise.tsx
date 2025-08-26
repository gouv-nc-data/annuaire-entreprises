import { Link, useNavigate, useSearchParams } from "@remix-run/react"
import { useState } from "react"
import { ISearchFilter } from "~/domain/entity/search-filters"
import { SearchParams } from "~/domain/entity/search-params"

import { ChevronDown, FileCheck, FileX, Plus, X } from "lucide-react"
import { Button } from "~/presentation/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "~/presentation/ui/popover"

export default function SearchFiltersSituationEntreprise({ label, icon }: ISearchFilter) {

    const [isOpen, setIsOpen] = useState(false)

    let [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const searchParamsFormatted = new SearchParams(searchParams)
    const searchParamsSituationEntreprise = searchParamsFormatted.situationEntreprise

    const [isClosed, setIsClosed] = useState(searchParamsSituationEntreprise === 'R')
    const [isOpened, setIsOpened] = useState(searchParamsSituationEntreprise === 'I')

    function handleOnClick(close: boolean = false) {
        const newSearchParams = new URLSearchParams(searchParams.toString())

        let newSituationEntrepriseSearchParams = ''

        if (isClosed) {
            newSituationEntrepriseSearchParams = 'R'
        } else if (isOpened) {
            newSituationEntrepriseSearchParams = 'I'
        }

        if (close) {
            newSituationEntrepriseSearchParams = ''
        }

        newSearchParams.set('situation_entreprise', newSituationEntrepriseSearchParams)
        newSearchParams.set('page', "1")

        console.log('newSituationEntrepriseSearchParams', newSituationEntrepriseSearchParams)

        setIsOpen(false)
        navigate(`/rechercher?${newSearchParams.toString()}`)
    }

    return (
        <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
                <Button variant="outline" className={`${isOpen ? 'ring-2 ring-blue-dinum' : ''}`}>
                    {icon}
                    {
                        searchParamsSituationEntreprise && searchParamsSituationEntreprise.length > 0
                            ?
                            <div className="filter-tag flex items-center gap-1" key={searchParamsSituationEntreprise}>
                                {
                                    searchParamsSituationEntreprise === 'I'
                                        ? <span className="py-1 px-2">En activité</span>
                                        : <span className="py-1 px-2 bg-red-100 text-red-700">Fermée</span>
                                }

                            </div>
                            : <span>{label}</span>
                    }
                    <ChevronDown className={`w-3 h-3 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="sm:w-[400px] shadow-xl" align="start">
                <div className="flex flex-col justify-start gap-4">
                    <div className="space-y-2">
                        <p className="text-xs text-muted-foreground">
                            Il s'agit d'un filtre sur la situation de l'entreprise et non sur la situation de l'établissement
                        </p>
                    </div>
                    <ul className="inline-flex items-center gap-1 bg-white p-1 rounded-xl shadow-sm border border-input w-full">
                        <li className="w-full border-r-1 pe-1">
                            <button onClick={() => {
                                setIsClosed(!isClosed)
                                setIsOpened(false)
                            }}
                                className={`w-full flex gap-2 items-center rounded-lg p-2 px-3 font-light border-1 text-sm ${isClosed ? 'bg-red-100  border-red-400 border-1 text-red-600 font-medium' : 'text-red-500 hover:bg-red-50 hover:text-red-600 border-transparent'}`}
                            >
                                <FileX strokeWidth={1.2} className={`${isClosed ? 'fill-red-200' : 'text-red-500 fill-red-50'} w-4 h-4 text-red-dinum`} />
                                <span>Fermée</span>
                            </button>
                        </li>
                        <li className="w-full">
                            <button onClick={() => {
                                setIsOpened(!isOpened)
                                setIsClosed(false)
                            }}
                                className={`w-full flex gap-2 items-center  rounded-lg p-2 px-3 font-light border-1 text-sm ${isOpened ? 'bg-blue-100  border-blue-200 border-1  text-blue-dinum  font-medium' : 'text-blue-600 hover:bg-blue-50 hover:text-blue-dinum border-transparent'}`}
                            >
                                <FileCheck strokeWidth={1.2} className={`${isOpened ? 'fill-blue-200' : 'fill-blue-50'} w-4 h-4 text-blue-dinum `} />
                                <span>En activité</span>
                            </button>
                        </li>
                    </ul>
                    <div className="flex items-center justify-between">
                        <Button variant={"outline"} onClick={() => {
                            setIsClosed(false)
                            setIsOpened(false)
                            handleOnClick(true)
                        }}>
                            <X className="w-5 h-5" />Effacer
                        </Button>
                        <Button onClick={() => {
                            handleOnClick()
                        }}>
                            <Plus className="w-5 h-5" />Appliquer
                        </Button>
                    </div>
                </div>
            </PopoverContent>
        </Popover >
    )
}
