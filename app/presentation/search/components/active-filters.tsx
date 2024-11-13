import ActiveFilter from "./active-filter"

export default function ActiveFilters({ activeFilters, filterLink }: { activeFilters: string[], filterLink: (label: string) => string }) {
    return (
        <div className="flex gap-2 flex-wrap items-center">
            <span className="text-sm font-medium text-primary">Filtres actifs :</span>
            <ul className="w-full flex items-center gap-1 justify-start flex-wrap">
                {
                    activeFilters.map(activeFilter => <ActiveFilter key={activeFilter} label={activeFilter} filterLink={filterLink} />)
                }
            </ul>
        </div>
    )
}
