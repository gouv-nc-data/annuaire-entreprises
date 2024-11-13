import { useState, useEffect } from "react"
import { Form, Link, useSearchParams } from "@remix-run/react"

import { ChevronsUpDown, Check, Plus, X } from "lucide-react"
import { ExistingSearchParams } from "~/application/search/existing-search-params"
import { Button } from "~/presentation/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "~/presentation/ui/command"
import { Input } from "~/presentation/ui/input"
import { Popover, PopoverTrigger, PopoverContent, } from "~/presentation/ui/popover"
import { cn } from "~/utils/tailwind"
import { SearchParams } from "~/domain/entity/search-params"

export default function LegalForm({ paramName, label, values, placeholder }: { paramName: string, label: string, values: string[], placeholder: string }) {

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
        <Form method="GET" action="/rechercher" className="w-full">
            <Input type="hidden" name={paramName} value={inputValue} />
            <ExistingSearchParams exclude={[paramName]} />
            {activeSearchParams && activeSearchParams.length > 0 &&
                <div className="flex gap-2 flex-wrap items-center">
                    <span className="text-sm font-medium text-primary">Filtres actifs :</span>
                    <ul className="flex items-center gap-1 justify-start flex-wrap">
                        {
                            activeSearchParams.map(activeFilter => {
                                return (
                                    <div className="filter-tag flex items-center gap-1" key={activeFilter}>
                                        <span className="py-1 px-2">{activeFilter}</span>
                                        <Link to={createFilterLink(activeFilter)} className="bg-emerald-200 py-2 px-1">
                                            <X className="w-3 h-3" />
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </ul>
                </div>
            }
            <div className="flex w-full items-center space-x-2">
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={open}
                            className="justify-between w-full"
                        >
                            {filterValue
                                ? values.find((item) => item === filterValue)
                                : label}
                            <ChevronsUpDown className="opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0">
                        <Command>
                            <CommandInput placeholder={placeholder} className="h-9" />
                            <CommandList>
                                <CommandEmpty>pas de {label} trouvé</CommandEmpty>
                                <CommandGroup>
                                    {values.filter(item => !activeSearchParams?.includes(item)).map((item) => (
                                        <CommandItem
                                            key={item}
                                            value={item}
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
