import { SearchRepository } from "./search/search-repository";
import { UniteLegalRepository } from "./unite-legal/unite-legal-repository";

function buildRepository() {
    return {
        search: { ...SearchRepository() },
        uniteLegal: { ...UniteLegalRepository() },
    };
}

export const Repository = buildRepository();