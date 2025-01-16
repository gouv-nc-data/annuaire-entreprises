import { useState } from "react"
import { useSearchParams, useNavigate } from "@remix-run/react"
import { SearchParams } from "~/domain/entity/search-params"
import { ISearchFilter } from "~/domain/entity/search-filters"

import { ChevronDown, Plus, X } from "lucide-react"
import { Button } from "~/presentation/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "~/presentation/ui/popover"
import SearchFilterCommand, { DataType } from "../search-filter-command/search-filter-command"

import Communes from '~/domain/filters/communes.json'

export default function SearchFiltersCommune({ label, icon }: ISearchFilter) {

    const [isOpen, setIsOpen] = useState(false)

    let [searchParams] = useSearchParams();

    const searchParamsFormatted = new SearchParams(searchParams)
    const searchParamsCity = searchParamsFormatted.ville

    return (
        <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
                <Button variant="outline" className={`${isOpen ? 'ring-2 ring-blue-dinum' : ''}`}>
                    {icon}
                    {
                        searchParamsCity && searchParamsCity.length > 0
                            ?
                            <ul className="flex items-center gap-1 justify-start flex-wrap">
                                {
                                    searchParamsCity.map(city => {
                                        return (
                                            <div className="filter-tag flex items-center gap-1" key={city}>
                                                <span className="py-1 px-2">{city}</span>
                                            </div>
                                        )
                                    })
                                }
                            </ul>
                            : <span>{label}</span>
                    }
                    <ChevronDown className={`w-3 h-3 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-xs shadow-xl" align="start">
                <div className="flex flex-col justify-start gap-4">
                    <div className="space-y-2">
                        <h4 className="font-medium leading-none text-md text-primary">Commune</h4>
                        <p className="text-xs text-muted-foreground">
                            Vous pouvez ajouter plusieurs filtres à la fois.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <SearchFilterCommand
                            key={'search-filter-commune'}
                            label="Commune"
                            values={Object.values(Communes)}
                            valuesLabel={Object.values(Communes)}
                            data={Communes as DataType}
                            placeholder="Choisir une commune"
                            paramName="ville"
                        />
                    </div>
                </div>
            </PopoverContent>
        </Popover >
    )
}
