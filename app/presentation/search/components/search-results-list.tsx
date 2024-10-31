import { SearchResults } from "~/domain/entity/search-results"
import SearchResultsItem from "./search-results-item"
import SearchPagination from "./search-pagination"

export function SearchResultsList({ searchResults }: { searchResults: SearchResults }) {
    return (
        <div className="flex flex-col gap-4">
            <span>{`${searchResults.total_results} ${searchResults.total_results > 1 ? 'résultats' : 'résultat'}`}</span>
            <ul className="flex flex-col gap-6">
                {
                    searchResults.results.map((result) => {
                        return (
                            <SearchResultsItem key={result.ridet} result={result} />
                        )
                    })
                }
            </ul>
            <SearchPagination searchResults={searchResults} />
        </div>
    )
}