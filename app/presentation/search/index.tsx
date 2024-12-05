import { useLoaderData } from "@remix-run/react";
import { getSearchResultsLoader } from "~/application/search";
import { SearchResultsList } from "./components/results/search-results-list"
import SearchResultsGuide from "./components/results/search-results-guide";
import SearchFilters from "./components/search-filters/search-filters";

export default function SearchPage() {
    const searchResults = useLoaderData<typeof getSearchResultsLoader>();

    console.log('search results : ', searchResults)

    return (
        <div>
            <SearchFilters />
            <div className="py-10 max-w-7xl mx-auto px-4">
                {
                    searchResults !== null && searchResults.results && searchResults.total_results
                        ? <SearchResultsList searchResults={searchResults} />
                        : <SearchResultsGuide />
                }
            </div>
        </div>
    )
}