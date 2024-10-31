import { SearchResults } from "../entity/search-results";

export interface IUniteLegalRepository {
    getUniteLegalByRidet: (ridet: string) => Promise<SearchResults>
}