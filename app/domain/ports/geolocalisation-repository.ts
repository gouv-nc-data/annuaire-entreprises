import { IGeoSearchResult } from "../entity/geo-search-result"

export interface IGeolocalisationRepository {
    search: (address: string) => Promise<IGeoSearchResult>
}