import { SearchResults } from "~/domain/entity/search-results";
import { ISearchRepository } from '~/domain/ports/searchRepository';

export function SearchRepository(): ISearchRepository {

    async function getSearchResults(queryString: String): Promise<SearchResults> {
        const res = await fetch(`${process.env.SEARCH_API_URL}?${queryString}`)
        return res.json()
    }

    return { getSearchResults };
}