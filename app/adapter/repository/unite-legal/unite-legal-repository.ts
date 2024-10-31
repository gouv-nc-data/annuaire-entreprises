import { SearchResults } from "~/domain/entity/search-results";
import { UniteLegal } from "~/domain/entity/unite-legal";
import { IUniteLegalRepository } from "~/domain/ports/unite-legal-repository";

export function UniteLegalRepository(): IUniteLegalRepository {

    async function getUniteLegalByRidet(ridet: String): Promise<SearchResults> {
        const res = await fetch(`${process.env.SEARCH_API_URL}?q=${ridet}`)
        return res.json()
    }

    return { getUniteLegalByRidet };
}