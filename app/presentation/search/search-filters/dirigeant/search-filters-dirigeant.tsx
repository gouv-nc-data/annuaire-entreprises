import { useState } from "react"
import { Form, Link, useSearchParams, useNavigate } from "@remix-run/react"

import { SearchParams } from "~/domain/entity/search-params"
import { ExistingSearchParams } from "~/application/search/existing-search-params"
import { ISearchFilter } from "~/domain/entity/search-filters"

import { ChevronDown, Plus, X } from "lucide-react"
import { Button } from "~/presentation/ui/button"
import { Input } from "~/presentation/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "~/presentation/ui/popover"
import { Label } from "~/presentation/ui/label"

export default function SearchFiltersDirigeant({ label, icon }: ISearchFilter) {

    const [isOpen, setIsOpen] = useState(false)

    let [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const searchParamsFormatted = new SearchParams(searchParams)
    const searchParamsDirigeant = searchParamsFormatted.dirigeant

    function createFilterLink() {
        const newSearchParams = new SearchParams(searchParams)
        newSearchParams.page = "1"
        newSearchParams.setValue("dirigeant", "")

        newSearchParams.buildUrl();
        return `/rechercher?${newSearchParams.url}`
    }

    function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const newDirigeantFilter = formData.get('dirigeant')?.toString().toLocaleLowerCase()

        if (!newDirigeantFilter) {
            return
        }

        const newSearchParams = new URLSearchParams(searchParams.toString())
        newSearchParams.set('dirigeant', newDirigeantFilter)

        setIsOpen(false)
        navigate(`/rechercher?${newSearchParams.toString()}`)
    }

    return (
        <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
                <Button variant="outline" className={`${isOpen ? 'ring-2 ring-blue-dinum' : ''}`}>
                    {icon}
                    {
                        searchParamsDirigeant
                            ? <span className="filter-tag flex py-1 px-2">{searchParamsDirigeant}</span>
                            : <span>{label}</span>
                    }
                    <ChevronDown className={`w-3 h-3 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="md:w-[400px] shadow-xl" align="start">
                <div className="flex flex-col justify-start gap-4">
                    <div className="space-y-2">
                        <h4 className="font-medium leading-none text-md text-primary">Dirigeant(e)</h4>
                        <p className="text-xs text-muted-foreground">
                            Recherchez toutes les entreprises liées à une personne dirigeant(e)
                        </p>
                    </div>
                    <Form key={searchParamsDirigeant} method="GET" action="/rechercher" onSubmit={handleOnSubmit} className="w-full flex flex-col gap-4">
                        <ExistingSearchParams exclude={["dirigeant"]} />
                        <div className="flex flex-col gap-2">
                            <Label>Nom prénom</Label>
                            <div className="flex w-full items-center space-x-2">
                                <div className="flex flex-col gap-2 w-full">
                                    <Input type="text" name="dirigeant" placeholder="Nom Prénom" defaultValue={searchParamsDirigeant ?? ''} />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <Button><Plus className="w-5 h-5" />Appliquer</Button>
                        </div>
                    </Form>
                    <Link to={createFilterLink()} className="absolute bottom-6">
                        <Button variant={"outline"}><X className="w-5 h-5" />Effacer</Button>
                    </Link>
                </div>
            </PopoverContent>
        </Popover >
    )
}
