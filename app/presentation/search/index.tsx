import { useLoaderData } from "@remix-run/react";
import { getSearchResultsLoader } from "~/application/search";
import { SearchResultsList } from "./components/search-results-list"
import SearchBar from "./components/search-bar"
import SearchResultsGuide from "./components/search-results-guide";

export default function SearchPage() {
    const searchResults = useLoaderData<typeof getSearchResultsLoader>();

    return (
        <div>
            <SearchBar />
            {
                searchResults !== null
                    ? <SearchResultsList searchResults={searchResults} />
                    : <SearchResultsGuide />
            }
        </div>
    )
}