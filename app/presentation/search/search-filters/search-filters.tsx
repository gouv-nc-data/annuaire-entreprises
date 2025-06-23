import { ISearchFilter } from "~/domain/entity/search-filters"
import SearchFiltersCommune from "./commune/search-filters-commune"
import SearchFiltersFormeJuridique from "./forme-juridique/search-filters-forme-juridique"
import SearchFiltersCodeNafApe from "./code-naf-ape/search-filters-code-naf-ape"
import SearchFiltersDirigeant from "./dirigeant/search-filters-dirigeant"
import SearchFiltersSituationEntreprise from "./situation-entreprise/search-filters-situation-entreprise"

import { MapPinned, Building2, User2, BookOpenCheck, Briefcase } from "lucide-react"

const searchFiltersCityProps: ISearchFilter =
{
    label: 'Commune',
    icon: <MapPinned className="text-blue-dinum" />,
}

const searchFiltersFormeJuridique: ISearchFilter =
{
    label: 'Forme juridique',
    icon: <Building2 className="text-blue-dinum" />,
}

const searchFiltersCodeNafApe: ISearchFilter =
{
    label: 'Activité principale',
    icon: <Briefcase className="text-blue-dinum" />,
}

const searchFiltersSituationEntreprise: ISearchFilter =
{
    label: 'Situation entreprise',
    icon: <BookOpenCheck className="text-blue-dinum" />,
}

const searchFiltersDirigeant: ISearchFilter =
{
    label: 'Dirigeant(e)',
    icon: <User2 className="text-blue-dinum" />,
}

const activeFilters = [
    <SearchFiltersCommune key={searchFiltersCityProps.label} {...searchFiltersCityProps} />,
    <SearchFiltersFormeJuridique key={searchFiltersFormeJuridique.label} {...searchFiltersFormeJuridique} />,
    <SearchFiltersCodeNafApe key={searchFiltersCodeNafApe.label} {...searchFiltersCodeNafApe} />,
    <SearchFiltersSituationEntreprise key={searchFiltersSituationEntreprise.label} {...searchFiltersSituationEntreprise} />,
    <SearchFiltersDirigeant key={searchFiltersDirigeant.label} {...searchFiltersDirigeant} />
]

export default function SearchFilters() {
    return (
        <div className="py-2 bg-slate-100">
            <div className="max-w-7xl mx-auto px-4">
                <ul className="flex flex-col items-start md:flex-row md:items-center gap-2 flex-wrap">
                    {activeFilters.map(filter => filter)}
                </ul>
            </div>
        </div>
    )
}
