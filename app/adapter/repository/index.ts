import { SearchRepository } from "./search/search-repository";
import { UniteLegaleRepository } from "./unite-legale/unite-legale-repository";
import { AgentPublicRepository } from "./agent-public/agent-public-repository";

function buildRepository() {
    return {
        search: { ...SearchRepository() },
        uniteLegale: { ...UniteLegaleRepository() },
        agentPublic: { ...AgentPublicRepository() }
    };
}

export const Repository = buildRepository();