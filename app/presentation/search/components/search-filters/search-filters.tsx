import { ISearchFilter } from "~/domain/entity/search-filters"

import SearchFiltersCity from "./search-filters-city"
import { MapPinned } from "lucide-react"

const searchFiltersCityProps: ISearchFilter =
{
    label: 'Zone géographique',
    icon: <MapPinned className="text-blue" />,
}

export default function SearchFilters() {
    return (
        <div className="py-2 bg-slate-200">
            <div className="container">
                <SearchFiltersCity {...searchFiltersCityProps} />
            </div>
        </div>
    )
}
