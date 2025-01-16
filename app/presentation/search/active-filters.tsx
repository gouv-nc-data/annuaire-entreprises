import ActiveFilter from "./active-filter"
import { DataType } from "./search-filters/search-filter-command/search-filter-command"



// Active filters can be of type : 
// DateType[]
// [
//     {
//         "key": "value"
//     },
//     {
//         "key": "value"
//     }
// ]

// string[]
// [
//     "value",
//     "value",
//     "value",
// ]


export default function ActiveFilters({ activeFilters, filterLink }: { activeFilters: DataType[] | string[], filterLink: (label: string) => string }) {

    return (
        <div className="flex gap-2 flex-wrap items-center">
            <span className="text-sm font-medium text-primary">Filtres actifs :</span>
            <ul className="w-full flex items-center gap-1 justify-start flex-wrap">
                {
                    activeFilters.map(activeFilter => {

                        const index = typeof activeFilter === 'string'
                            ? activeFilter
                            : Object.keys(activeFilter)[0]

                        const label = typeof activeFilter === 'string'
                            ? activeFilter
                            : Object.values(activeFilter)[0]

                        return (
                            <ActiveFilter key={index} index={index} label={label} filterLink={filterLink} />)
                    })
                }
            </ul>
        </div>
    )
}
