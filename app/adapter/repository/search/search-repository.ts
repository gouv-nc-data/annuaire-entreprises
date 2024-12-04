import { SearchResults } from "~/domain/entity/search-results";
import { ISearchRepository } from '~/domain/ports/search-repository';

export function SearchRepository(): ISearchRepository {

    async function getSearchResults(queryString: String): Promise<SearchResults> {
        console.log('adresse de search api url : ', process.env.SEARCH_API_URL)
        console.log('requeête effectuée ', `${process.env.SEARCH_API_URL}?${queryString}`)

        const res = await fetch(`${process.env.SEARCH_API_URL}?${queryString}`)

        console.log('res from search repo :', res)

        return res.json()
    }

    return { getSearchResults };
}