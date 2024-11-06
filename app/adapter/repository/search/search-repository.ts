import { SearchResults } from "~/domain/entity/search-results";
import { ISearchRepository } from '~/domain/ports/search-repository';

export function SearchRepository(): ISearchRepository {

    async function getSearchResults(queryString: String): Promise<SearchResults> {
        const res = await fetch(`https://annuaire-entreprises.qualif.gnc/api/v1/recherche?${queryString}`)
        return res.json()
    }

    return { getSearchResults };
}