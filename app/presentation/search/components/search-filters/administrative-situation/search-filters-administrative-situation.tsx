
import { useState } from "react"
import { useSearchParams } from "@remix-run/react"
import { ChevronDown, Code } from "lucide-react"

import { ISearchFilter } from "~/domain/entity/search-filters"
import { Button } from "~/presentation/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "~/presentation/ui/popover"
import SearchFilterAdministrativeSituation from "./search-filter-administrative-situation"
import { SearchParams } from "~/domain/entity/search-params"

import NatureJuridiques from "~/domain/filters/nature-juridiques.json"
import CodesNaf from '~/domain/filters/codes-naf.json'

export type DataType = {
    [key: string]: string
}

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
            <PopoverContent className="md:w-[400px] shadow-2xl max-h-[400px] overflow-y-auto" align="start">
                <div className="flex flex-col justify-start gap-4">
                    <div className="space-y-2">
                        <h4 className="font-medium text-md leading-none text-primary">Situation administrative</h4>
                        <p className="text-xs text-muted-foreground">
                            Vous pouvez ajouter plusieurs filtres à la fois.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <SearchFilterAdministrativeSituation
                            label="Forme juridique"
                            values={Object.values(NatureJuridiques)}
                            valuesLabel={Object.values(NatureJuridiques)}
                            data={NatureJuridiques as DataType}
                            placeholder="Choisir une forme juridique"
                            paramName="forme_juridique"
                        />
                        <SearchFilterAdministrativeSituation
                            label="Code NAF/APE"
                            values={Object.keys(CodesNaf)}
                            valuesLabel={Object.keys(CodesNaf).map((key: string) => `${key} - ${(CodesNaf[key as keyof typeof CodesNaf])}`)}
                            data={CodesNaf as DataType}
                            placeholder="Choisir un code NAF/APE"
                            paramName="activite_principale"
                        />
                    </div>
                </div>
            </PopoverContent>
        </Popover >
    )
}
