import { SearchRepository } from "./search/search-repository";
import { UniteLegaleRepository } from "./unite-legale/unite-legale-repository";
import { AgentPublicRepository } from "./agent-public/agent-public-repository";
import { GeolocalisationRepository } from "./geolocalisation/search";
import { FeedbackRepository } from "./feedback/feedback-repository";

function buildRepository() {
    return {
        search: { ...SearchRepository() },
        uniteLegale: { ...UniteLegaleRepository() },
        agentPublic: { ...AgentPublicRepository() },
        geolocalisation: { ...GeolocalisationRepository() },
        feedback: { ...FeedbackRepository() }
    };
}

export const Repository = buildRepository();