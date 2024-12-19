import { IAgentPublic } from "../entity/agent-public"
import { AgentPublicSignupResponse } from "../entity/agent-public"


export interface IAgentPublicRepository {
    signup: (agentPulic: IAgentPublic) => Promise<AgentPublicSignupResponse>
}