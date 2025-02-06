import { Link } from "@remix-run/react";
import { Building2, ChevronDown } from "lucide-react";
import { SearchResults } from "~/domain/entity/search-results";
import { UniteLegale } from "~/domain/entity/unite-legale";

export function SearchModalResultsList({ searchResults, searchValue, currentSelectedItem }: { searchResults: SearchResults, searchValue: string, currentSelectedItem: string | null }) {

    return (
        <div>
            {
                searchResults && searchResults.total_results > 0 && searchValue.length > 2
                    ?
                    <div className="pb-2 bg-white">
                        <div className="flex items-center gap-2 p-4 pb-2 bg-white">
                            <div className="inline-flex items-center gap-2">
                                <div className="flex items-center gap-1 text-primary font-base text-slate-900 text-xs px-1 pe-[7px] !py-1 !h-auto border-1 border-zinc-300 shadow bg-white hover:bg-zinc-100 rounded-md">
                                    <Building2 strokeWidth={1.2} className="w-5 h-5 text-blue-dinum fill-blue-50" />
                                    {searchResults.total_results}
                                </div>
                                <p className="text-slate-900 text-xs font-medium">Entreprises trouvées</p>
                            </div>
                        </div>
                        <ul className="flex flex-col bg-white px-2">
                            {
                                searchResults.results.map((uniteLegale: UniteLegale) => {

                                    const isFocused = currentSelectedItem ? currentSelectedItem === 'result-' + uniteLegale.rid : false

                                    return (
                                        <Link
                                            key={uniteLegale.rid}
                                            to={`/entreprise/${uniteLegale.rid}`}
                                            className={`${isFocused ? 'bg-slate-100' : 'hover:bg-slate-100 text-slate-700'} inline-flex items-center gap-2 group px-4 py-2 rounded-lg`}>
                                            <span className="text-xs font-normal flex items-center gap-1 group-hover:text-primary">
                                                {uniteLegale.nom_complet}
                                            </span>
                                            <span className="text-xs font-normal flex items-center gap-1 group-hover:text-primary bg-blue-50 px-2 rounded-md border-1 border-blue-200">
                                                {uniteLegale.rid}
                                            </span>
                                        </Link>
                                    )
                                })
                            }
                        </ul>
                        {
                            searchResults.total_results > 5 &&
                            <footer className="px-6 pb-2 bg-white">
                                <Link
                                    className="inline-flex items-center gap-1 text-blue-dinum font-medium text-xs"
                                    to={`/rechercher?terme=${searchValue}`}>
                                    Afficher tous les résultats
                                    <ChevronDown className="w-4 h-4" />
                                </Link>
                            </footer>
                        }
                    </div>
                    : <div></div>
            }
        </div>
    )
}