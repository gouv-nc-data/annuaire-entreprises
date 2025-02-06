
import { useState } from "react"
import { useSearchParams } from "@remix-run/react"
import { ChevronDown } from "lucide-react"

import { ISearchFilter } from "~/domain/entity/search-filters"
import { Button } from "~/presentation/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "~/presentation/ui/popover"
import SearchFilterCommand from "../search-filter-command/search-filter-command"
import { SearchParams } from "~/domain/entity/search-params"

import NatureJuridiques from "~/domain/filters/nature-juridiques.json"

export type DataType = {
    [key: string]: string
}

export default function SearchFiltersFormeJuridique({ label, icon }: ISearchFilter) {

    const [searchParams] = useSearchParams();
    const [isOpen, setIsOpen] = useState(false)

    const searchParamsFormatted = new SearchParams(searchParams)
    const filtersAreActive = searchParamsFormatted.isFormeJuridiqueFilterActive

    return (
        <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
                <Button variant="outline" className={`${isOpen ? 'ring-2 ring-blue-dinum' : ''}`}>
                    {icon}
                    {
                        filtersAreActive
                            ? <span className="filter-tag flex py-1 px-2">+1 Filtres forme juridique</span>
                            : <span>{label}</span>
                    }

                    <ChevronDown className={`w-3 h-3 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="md:w-[400px] shadow-xl max-h-[400px] overflow-y-auto" align="start">
                <div className="flex flex-col justify-start gap-4">
                    <div className="space-y-2">
                        <h4 className="font-medium text-md leading-none text-primary">Forme juridique</h4>
                        <p className="text-xs text-muted-foreground">
                            Vous pouvez ajouter plusieurs filtres à la fois.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <SearchFilterCommand
                            label="Forme juridique"
                            values={Object.values(NatureJuridiques)}
                            valuesLabel={Object.values(NatureJuridiques)}
                            data={NatureJuridiques as DataType}
                            placeholder="Choisir une forme juridique"
                            paramName="forme_juridique"
                        />
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}
