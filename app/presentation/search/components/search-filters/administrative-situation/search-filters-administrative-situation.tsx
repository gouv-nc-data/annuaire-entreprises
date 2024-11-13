import { useState } from "react"
import { ISearchFilter } from "~/domain/entity/search-filters"

import NatureJuridiques from "~/domain/filters/nature-juridiques.json"

import { ChevronDown, Plus, X } from "lucide-react"
import { Button } from "~/presentation/ui/button"
import { Input } from "~/presentation/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "~/presentation/ui/popover"
import SearchFilterAdministrativeSituation from "./search-filter-administrative-situation"

export default function searchFiltersAdministrativeSituation({ label, icon }: ISearchFilter) {

    const [isOpen, setIsOpen] = useState(false)


    return (
        <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
                <Button variant="outline" className={`${isOpen ? 'ring-2 ring-blue-dinum' : ''}`}>
                    {icon}
                    <span>{label}</span>
                    <ChevronDown className={`w-3 h-3 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80" align="start">
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
