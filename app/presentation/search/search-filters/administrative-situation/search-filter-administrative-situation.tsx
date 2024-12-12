import { useState } from "react"
import { Form, useSearchParams } from "@remix-run/react"

import { ChevronsUpDown, Check, Plus, CornerDownRight } from "lucide-react"
import { ExistingSearchParams } from "~/application/search/existing-search-params"
import { Button } from "~/presentation/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "~/presentation/ui/command"
import { Input } from "~/presentation/ui/input"
import { Popover, PopoverTrigger, PopoverContent, } from "~/presentation/ui/popover"
import { cn } from "~/utils/tailwind"
import { SearchParams, SearchParamskeyStringType } from "~/domain/entity/search-params"
import ActiveFilters from "../../active-filters"
import { DataType } from "./search-filters-administrative-situation"

export default function SearchFilterAdministrativeSituation({ paramName, label, data, placeholder }: { paramName: SearchParamskeyStringType, label: string, values: string[], valuesLabel: string[], data: DataType, placeholder: string }) {

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

        newSearchParams.buildUrl();
        return `/rechercher?${newSearchParams.url}`
    }

    function handleDisplayValueName(selectedItem: string) {
        const key = Object.keys(data).find((key: string) => data[key] === selectedItem)

        if (key?.toLowerCase() === selectedItem.toLowerCase())
            return selectedItem
        else {
            return `${key} - ${selectedItem}`
        }
    }

    const activeSearchParamsData = activeSearchParams && activeSearchParams.length > 0
        ? activeSearchParams.map((param: string) => {
            return {
                [param]: data[param]
            }
        })
        : []

    return (
        <div className="flex flex-col gap-4 first:border-none border-t-1 border-slate-200 pt-4">
            <p className="text-zinc-600 text-sm font-medium flex items-center gap-2"><CornerDownRight className="w-4 h-4 text-blue-dinum -mt-1" /> {label}</p>
            <Form method="GET" action="/rechercher" className="flex flex-col gap-4">
                <Input type="hidden" name={paramName} value={inputValue} />
                <ExistingSearchParams exclude={[paramName]} />
                {activeSearchParams && activeSearchParams.length > 0 &&
                    <ActiveFilters activeFilters={activeSearchParamsData} filterLink={createFilterLink} />
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
                                    ? handleDisplayValueName(data[filterValue])
                                    : label}
                                <ChevronsUpDown className="opacity-50 absolute right-2" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className={`w-xs p-0 shadow-2xl`}>
                            <Command>
                                <CommandInput placeholder={placeholder} className="h-9" />
                                <CommandList>
                                    <CommandEmpty className="text-left p-2 text-sm">Liste vide</CommandEmpty>
                                    <CommandGroup className="w-full">
                                        {Object.keys(data).filter((key: string) => !activeSearchParams?.includes(key)).map((key: string) => (
                                            <CommandItem
                                                key={key}
                                                value={
                                                    key.toLowerCase() !== data[key].toLowerCase()
                                                        ? `${key} - ${data[key]}`
                                                        : data[key]
                                                }
                                                className="text-sm text-slate-600 font-normal hover:text-primary"
                                                onSelect={() => {
                                                    handleChangeValue(key)
                                                    setOpen(false)
                                                }}
                                            >
                                                {
                                                    key.toLowerCase() !== data[key].toLowerCase()
                                                        ? `${key} - ${data[key]}`
                                                        : data[key]
                                                }
                                                <Check
                                                    className={cn(
                                                        "ml-auto",
                                                        filterValue === key ? "opacity-100" : "opacity-0"
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
        </div>
    )
}
