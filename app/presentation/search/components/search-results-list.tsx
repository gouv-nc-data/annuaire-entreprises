import { SearchResults } from "~/domain/entity/search-results"
import SearchResultUniteLegale from "./search-results-unite-legal"
import SearchPagination from "./search-pagination"

export function SearchResultsList({ searchResults }: { searchResults: SearchResults }) {

    const currentPage = searchResults.page

    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-1 text-primary text-sm text-zinc-600 font-normal">
                {currentPage > 1 && <span>page {currentPage} de</span>}
                <span>{`${searchResults.total_results} ${searchResults.total_results > 1 ? 'résultats trouvés.' : 'résultat trouvé.'}`}</span>
            </div>
            <ul className="flex flex-col gap-6">
                {
                    searchResults.results.map((result) => {
                        return (
                            <SearchResultUniteLegale key={result.ridet} uniteLegale={result} />
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