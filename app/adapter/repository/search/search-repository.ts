import { SearchResults } from "~/domain/entity/search-results";
import { ISearchRepository } from '~/domain/ports/search-repository';

export function SearchRepository(): ISearchRepository {

    async function getSearchResults(queryString: String): Promise<SearchResults> {
        const res = await fetch(`${process.env.SEARCH_API_URL}?${queryString}`)
        return res.json()
    }

    return { getSearchResults };
}