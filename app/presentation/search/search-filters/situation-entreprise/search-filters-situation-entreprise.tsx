import { Link, useNavigate, useSearchParams } from "@remix-run/react"
import { useState } from "react"
import { ISearchFilter } from "~/domain/entity/search-filters"
import { SearchParams } from "~/domain/entity/search-params"

import { ChevronDown, FileCheck, FileX } from "lucide-react"
import { Button } from "~/presentation/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "~/presentation/ui/popover"

export default function SearchFiltersSituationEntreprise({ label, icon }: ISearchFilter) {

    const [isOpen, setIsOpen] = useState(false)

    let [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const searchParamsFormatted = new SearchParams(searchParams)
    const searchParamsSituationEntreprise = searchParamsFormatted.situationEntreprise

    function handleOnClick(item: 'I' | 'R') {

        const newSearchParams = new URLSearchParams(searchParams.toString())

        let newSituationEntrepriseSearchParams = ''

        if (item !== searchParamsSituationEntreprise) {
            newSituationEntrepriseSearchParams = item
        }

        newSearchParams.set('situation_entreprise', newSituationEntrepriseSearchParams)
        newSearchParams.set('page', "1")

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
            <PopoverContent className="w-xs shadow-xl" align="start">
                <div className="flex flex-col justify-start gap-4">
                    <div className="space-y-2">
                        <p className="text-xs text-muted-foreground">
                            Il s'agit d'un filtre sur la situation de l'entreprise et non sur la situation de l'établissement
                        </p>
                    </div>
                    <ul className="inline-flex items-center gap-1 bg-white p-1 rounded-xl shadow-sm border border-input w-full">
                        <li className="w-full border-r-1 pe-1">
                            <button onClick={() => handleOnClick('R')}
                                className={`w-full flex gap-2 items-center rounded-lg p-2 px-3 font-light border-1 text-sm ${searchParamsSituationEntreprise === 'R' ? 'bg-red-100  border-red-400 border-1 text-red-600 font-medium' : 'text-red-500 hover:bg-red-50 hover:text-red-600 border-transparent'}`}
                            >
                                <FileX strokeWidth={1.2} className={`${searchParamsSituationEntreprise === 'R' ? 'fill-red-200' : 'text-red-500 fill-red-50'} w-5 h-5 text-red-dinum`} />
                                <span>Fermée</span>
                            </button>
                        </li>
                        <li className="w-full">
                            <button onClick={() => handleOnClick('I')}
                                className={`w-full flex gap-2 items-center  rounded-lg p-2 px-3 font-light border-1 text-sm ${searchParamsSituationEntreprise === 'I' ? 'bg-blue-100  border-blue-200 border-1  text-blue-dinum  font-medium' : 'text-blue-600 hover:bg-blue-50 hover:text-blue-dinum border-transparent'}`}
                            >
                                <FileCheck strokeWidth={1.2} className={`${searchParamsSituationEntreprise === 'I' ? 'fill-blue-200' : 'fill-blue-50'} w-5 h-5 text-blue-dinum `} />
                                <span>En activité</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </PopoverContent>
        </Popover >
    )
}
