import { IAgentPublic } from '~/domain/entity/agent-public';
import { AgentPublicSignupResponse } from '~/domain/entity/agent-public';
import { IAgentPublicRepository } from '~/domain/ports/agent-public-repository';

export function AgentPublicRepository(): IAgentPublicRepository {

    async function signup(agentPulic: IAgentPublic): Promise<AgentPublicSignupResponse> {
        const res = await fetch(`${process.env.API_URL}agent-public/signup`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: agentPulic.email,
                reason: agentPulic.reason
            })
        })
        return res.json()
    }

    return { signup };
}