import { SearchResults } from "~/domain/entity/search-results"
import SearchResultUniteLegale from "./unite-legale/search-results-unite-legale"
import SearchPagination from "../search-pagination"

export function SearchResultsList({ searchResults }: { searchResults: SearchResults }) {

    const currentPage = searchResults.page

    console.log('search results : ', searchResults)

    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-1 text-primary text-sm text-zinc-600 font-normal">
                {currentPage > 1 && <span>page {currentPage} de</span>}
                <span>{`${searchResults.total_results} ${searchResults.total_results > 1 ? 'résultats trouvés.' : 'résultat trouvé.'}`}</span>
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