import { SearchResults } from "~/domain/entity/search-results"
import SearchResultUniteLegale from "./unite-legale/search-results-unite-legale"
import SearchPagination from "../search-pagination"

export function SearchResultsList({ searchResults }: { searchResults: SearchResults }) {

    const currentPage = searchResults.page

    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-1 text-primary text-sm text-zinc-600 font-normal">
                {currentPage > 1 && <span>page {currentPage} de</span>}
                {
                    searchResults.total_results === 10000
                        ? <span>+ de 9999 résultats trouvés.</span>
                        : <span>{`${searchResults.total_results} ${searchResults.total_results > 1 ? 'résultats trouvés.' : 'résultat trouvé.'}`}</span>
                }
            </div>
            <ul className="flex flex-col gap-10">
                {
                    searchResults.results.map((result) => {
                        return (
                            <SearchResultUniteLegale key={result.rid} uniteLegale={result} />
                        )
                    })
                }
            </ul>
            {searchResults.total_results > 0 &&
                <SearchPagination searchResults={searchResults} />
            }
        </div>
    )
}