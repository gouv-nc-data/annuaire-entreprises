import { SearchResults } from "../entity/search-results";

export interface ISearchRepository {
    getSearchResults: (queryString: string) => Promise<SearchResults>
}