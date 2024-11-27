import { SearchResults } from "../entity/search-results";

export interface IUniteLegaleRepository {
    getUniteLegaleByRid: (rid: string) => Promise<SearchResults>
}