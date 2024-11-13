import { useState } from "react"
import { ISearchFilter } from "~/domain/entity/search-filters"

import NatureJuridiques from "~/domain/filters/nature-juridiques.json"

import { ChevronDown } from "lucide-react"
import { Button } from "~/presentation/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "~/presentation/ui/popover"
import SearchFilterAdministrativeSituation from "./search-filter-administrative-situation"
import { useSearchParams } from "@remix-run/react"
import { SearchParams } from "~/domain/entity/search-params"

export default function searchFiltersAdministrativeSituation({ label, icon }: ISearchFilter) {

    let [searchParams] = useSearchParams();
    const [isOpen, setIsOpen] = useState(false)

    const searchParamsFormatted = new SearchParams(searchParams)
    const filtersAreActive = searchParamsFormatted.isAdministrativeFilterActive

    return (
        <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
                <Button variant="outline" className={`${isOpen ? 'ring-2 ring-blue-dinum' : ''}`}>
                    {icon}
                    {
                            filtersAreActive
                                ? <span className="filter-tag flex bg-emerald-300 py-1 px-2">+1 Filtres administratifs</span>
                                : <span>{label}</span>
                        }
                    
                    <ChevronDown className={`w-3 h-3 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-xs shadow-xl" align="start">
                <div className="flex flex-col justify-start gap-4">
                    <div className="space-y-2">
                        <h4 className="font-medium leading-none text-primary">Situation administrative</h4>
                        <p className="text-sm text-muted-foreground">
                            Vous pouvez ajouter plusieurs filtre à la fois.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div>
                            <p className="font-medium leading-none text-primary">Forme juridique</p>
                        </div>
                    </div>
                    <SearchFilterAdministrativeSituation
                        label="Forme juridique"
                        values={Object.values(NatureJuridiques)}
                        placeholder="Choisir une forme juridique"
                        paramName="forme_juridique"
                    />
                </div>
            </PopoverContent>
        </Popover >
    )
}
