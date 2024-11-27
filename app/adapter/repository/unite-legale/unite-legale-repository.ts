import { SearchResults } from "~/domain/entity/search-results";
import { IUniteLegaleRepository } from "~/domain/ports/unite-legale-repository";

export function UniteLegaleRepository(): IUniteLegaleRepository {

    async function getUniteLegaleByRid(rid: String): Promise<SearchResults> {
        const res = await fetch(`${process.env.SEARCH_API_URL}?q=${rid}`)
        return res.json()
    }

    return { getUniteLegaleByRid };
}