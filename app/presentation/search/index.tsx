import { useLoaderData } from "@remix-run/react";
import { getSearchResultsLoader } from "~/application/search";
import { SearchResultsList } from "./results/search-results-list"
import SearchResultsGuide from "./results/search-results-guide";
import SearchFilters from "./search-filters/search-filters";

export default function SearchPage() {
    const searchResults = useLoaderData<typeof getSearchResultsLoader>();

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