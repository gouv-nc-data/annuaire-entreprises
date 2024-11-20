import { SearchResults } from "~/domain/entity/search-results";
import { IUniteLegaleRepository } from "~/domain/ports/unite-legale-repository";

export function UniteLegaleRepository(): IUniteLegaleRepository {

    async function getUniteLegaleByRidet(ridet: String): Promise<SearchResults> {
        const res = await fetch(`${process.env.SEARCH_API_URL}?q=${ridet}`)
        return res.json()
    }

    return { getUniteLegaleByRidet };
}