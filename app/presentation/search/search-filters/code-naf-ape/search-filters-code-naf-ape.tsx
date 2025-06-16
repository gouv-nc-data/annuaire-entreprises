
import { useState } from "react"
import { useSearchParams } from "@remix-run/react"
import { ChevronDown } from "lucide-react"

import { ISearchFilter } from "~/domain/entity/search-filters"
import { Button } from "~/presentation/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "~/presentation/ui/popover"
import SearchFilterCommand from "../search-filter-command/search-filter-command"
import { SearchParams } from "~/domain/entity/search-params"

import CodesNaf from '~/domain/filters/codes-naf.json'

export type DataType = {
    [key: string]: string
}

export default function SearchFiltersCodeNafApe({ label, icon }: ISearchFilter) {

    let [searchParams] = useSearchParams();
    const [isOpen, setIsOpen] = useState(false)

    const searchParamsFormatted = new SearchParams(searchParams)
    const filtersAreActive = searchParamsFormatted.isCodeNafApeFilterActive

    return (
        <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
                <Button variant="outline" className={`${isOpen ? 'ring-2 ring-blue-dinum' : ''}`}>
                    {icon}
                    {
                        filtersAreActive
                            ? <span className="filter-tag flex py-1 px-2">+1 Filtres code NAF/APE</span>
                            : <span>{label}</span>
                    }

                    <ChevronDown className={`w-3 h-3 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="md:w-[400px] shadow-xl max-h-[400px] overflow-y-auto" align="start">
                <div className="flex flex-col justify-start gap-4">
                    <div className="space-y-2">
                        <p className="text-xs text-muted-foreground">
                            Choisir une activité principale
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <SearchFilterCommand
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
