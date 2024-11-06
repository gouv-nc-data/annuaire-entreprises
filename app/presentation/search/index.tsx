import { useLoaderData } from "@remix-run/react";
import { getSearchResultsLoader } from "~/application/search";
import { SearchResultsList } from "./components/search-results-list"
import SearchResultsGuide from "./components/search-results-guide";
import SearchFilters from "./components/search-filters/search-filters";

export default function SearchPage() {
    const searchResults = useLoaderData<typeof getSearchResultsLoader>();

    return (
        <div>
            <SearchFilters />
            <div className="py-10 container">
                {
                    searchResults !== null
                        ? <SearchResultsList searchResults={searchResults} />
                        : <SearchResultsGuide />
                }
            </div>
        </div>
    )
}