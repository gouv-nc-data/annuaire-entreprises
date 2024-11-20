import { SearchRepository } from "./search/search-repository";
import { UniteLegaleRepository } from "./unite-legale/unite-legale-repository";

function buildRepository() {
    return {
        search: { ...SearchRepository() },
        uniteLegale: { ...UniteLegaleRepository() },
    };
}

export const Repository = buildRepository();