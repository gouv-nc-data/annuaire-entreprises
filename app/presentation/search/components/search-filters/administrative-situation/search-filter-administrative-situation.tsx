import { useState, useEffect } from "react"
import { Form, Link, useSearchParams } from "@remix-run/react"

import { ChevronsUpDown, Check, Plus, X } from "lucide-react"
import { ExistingSearchParams } from "~/application/search/existing-search-params"
import { Button } from "~/presentation/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "~/presentation/ui/command"
import { Input } from "~/presentation/ui/input"
import { Popover, PopoverTrigger, PopoverContent, } from "~/presentation/ui/popover"
import { cn } from "~/utils/tailwind"
import { SearchParams, SearchParamskeyStringType } from "~/domain/entity/search-params"
import ActiveFilters from "../../active-filters"

export default function SearchFilterAdministrativeSituation({ paramName, label, values, placeholder }: { paramName: SearchParamskeyStringType, label: string, values: string[], placeholder: string }) {

    let [searchParams] = useSearchParams();

    const [open, setOpen] = useState(false)
    const [filterValue, setFilterValue] = useState("")
    const [inputValue, setInputValue] = useState("")

    const searchParamsFormatted = new SearchParams(searchParams)
    const activeSearchParams = searchParamsFormatted.getValue(paramName)

    const handleChangeValue = (item: string) => {
        if (activeSearchParams && activeSearchParams.length > 0) {
            const joinedSearchParams = activeSearchParams + ',' + item
            setInputValue(joinedSearchParams)
        } else {
            setInputValue(item)
        }

        setFilterValue(item)
    }

    function createFilterLink(item: string) {
        const newSearchParams = new SearchParams(searchParams)
        const newActiveSearchParams = activeSearchParams?.filter(filter => filter !== item)

        newSearchParams.page = "1"
        newSearchParams.setValue(paramName, newActiveSearchParams ? newActiveSearchParams : [])

        newSearchParams.buildQuery();
        return `/rechercher?${newSearchParams.query}`
    }

    return (
        <Form method="GET" action="/rechercher" className="flex flex-col gap-4">
            <Input type="hidden" name={paramName} value={inputValue} />
            <ExistingSearchParams exclude={[paramName]} />
            {activeSearchParams && activeSearchParams.length > 0 &&
                <ActiveFilters activeFilters={activeSearchParams} filterLink={createFilterLink} />
            }
            <div className="flex items-center space-x-2">
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild className={`relative w-full ${open ? 'ring-2 ring-blue-dinum' : 'ring-2 ring-transparent'}`}>
                        <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={open}
                            className="flex flex-wrap max-w-xs h-full items-center justify-start whitespace-normal text-left pe-6 ps-2"
                        >
                            {filterValue
                                ? values.find((item) => item === filterValue)
                                : label}
                            <ChevronsUpDown className="opacity-50 absolute right-2" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className={`w-xs p-0 shadow-2xl border-1 border-slate-300 mt-4`}>
                        <Command>
                            <CommandInput placeholder={placeholder} className="h-9" />
                            <CommandList>
                                <CommandEmpty className="text-left p-2 text-sm">Liste vide</CommandEmpty>
                                <CommandGroup className="w-full">
                                    {values.filter(item => !activeSearchParams?.includes(item)).map((item) => (
                                        <CommandItem
                                            key={item}
                                            value={item}
                                            className="text-sm text-slate-600 font-normal hover:text-primary"
                                            onSelect={(currentValue: string) => {
                                                handleChangeValue(currentValue === filterValue ? "" : currentValue)
                                                setOpen(false)
                                            }}
                                        >
                                            {item}
                                            <Check
                                                className={cn(
                                                    "ml-auto",
                                                    filterValue === item ? "opacity-100" : "opacity-0"
                                                )}
                                            />
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>
                <Button><Plus className="w-5 h-5" /></Button>
            </div>
        </Form>
    )
}
