import { ISearchFilter } from "~/domain/entity/search-filters"
import SearchFiltersCity from "./search-filters-city"
import SearchFiltersAdministrativeSituation from "./administrative-situation/search-filters-administrative-situation"


import { MapPinned, Landmark } from "lucide-react"

const searchFiltersCityProps: ISearchFilter =
{
    label: 'Zone géographique',
    icon: <MapPinned className="text-blue-dinum" />,
}

const searchFiltersAdministrativeSituation: ISearchFilter =
{
    label: 'Situation administrative',
    icon: <Landmark className="text-blue-dinum" />,
}

const activeFilters = [
    <SearchFiltersCity key={searchFiltersCityProps.label} {...searchFiltersCityProps} />,
    <SearchFiltersAdministrativeSituation key={searchFiltersAdministrativeSituation.label} {...searchFiltersAdministrativeSituation} />,
]

export default function SearchFilters() {
    return (
        <div className="py-2 bg-slate-200">
            <div className="max-w-7xl mx-auto px-4">
                <ul className="flex flex-col items-start md:flex-row md:items-center gap-2">
                    {activeFilters.map(filter => filter)}
                </ul>
            </div>
        </div>
    )
}
