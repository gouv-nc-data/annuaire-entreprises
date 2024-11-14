import { useState } from "react"
import { Form, Link, useSearchParams, useNavigate } from "@remix-run/react"
import { SearchParams } from "~/domain/entity/search-params"
import { ExistingSearchParams } from "~/application/search/existing-search-params"
import { ISearchFilter } from "~/domain/entity/search-filters"

import { ChevronDown, Plus, X } from "lucide-react"
import { Button } from "~/presentation/ui/button"
import { Input } from "~/presentation/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "~/presentation/ui/popover"
import ActiveFilters from "../active-filters"

export default function SearchFiltersCity({ label, icon }: ISearchFilter) {

    const [isOpen, setIsOpen] = useState(false)

    let [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const searchParamsFormatted = new SearchParams(searchParams)
    const searchParamsCity = searchParamsFormatted.ville

    function createFilterLink(item: string) {
        const newSearchParams = new SearchParams(searchParams)
        const newActiveSearchParams = searchParamsCity?.filter(filter => filter !== item)

        newSearchParams.page = "1"
        newSearchParams.setValue("ville", newActiveSearchParams ? newActiveSearchParams : [])

        newSearchParams.buildQuery();
        return `/rechercher?${newSearchParams.query}`
    }


    function handleOnSubmit(e: any) {
        e.preventDefault()
        const formData = new FormData(e.target)
        const newCityFilter = formData.get('ville')?.toString().toLocaleLowerCase()

        if (!newCityFilter) {
            return
        }

        const alreadyFoundedCityFilter = searchParamsCity?.find(filter => filter === newCityFilter)

        if (alreadyFoundedCityFilter) {
            return
        }

        const newSearchParams = new URLSearchParams(searchParams.toString())
        const newCitySearchParams = searchParamsCity ? searchParamsCity + ', ' + newCityFilter : newCityFilter

        newSearchParams.set('ville', newCitySearchParams)

        setIsOpen(false)
        navigate(`/rechercher?${newSearchParams.toString()}`)
    }

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
                        <h4 className="font-medium leading-none text-md text-primary">Ville, province ou région</h4>
                        <p className="text-xs text-muted-foreground">
                            Vous pouvez ajouter plusieurs filtre géolocalisé à la fois.
                        </p>
                    </div>
                    {searchParamsCity && searchParamsCity.length > 0 &&
                        <ActiveFilters activeFilters={searchParamsCity} filterLink={createFilterLink} />
                    }
                    <Form method="GET" action="/rechercher" onSubmit={handleOnSubmit} className="w-full">
                        <ExistingSearchParams exclude={["ville"]} />
                        <div className="flex w-full items-center space-x-2">
                            <Input type="text" name="ville" placeholder="ex: Noumea" />
                            <Button><Plus className="w-5 h-5" /></Button>
                        </div>
                    </Form>
                </div>
            </PopoverContent>
        </Popover >
    )
}
