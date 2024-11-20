import { SearchResults } from "../entity/search-results";

export interface IUniteLegaleRepository {
    getUniteLegaleByRidet: (ridet: string) => Promise<SearchResults>
}