import { IFeedback } from '~/domain/entity/feedback';
import { IFeedbackRepository } from '~/domain/ports/feedback-repository';

export function FeedbackRepository(): IFeedbackRepository {

    async function postFeedback(feedback: IFeedback): Promise<{ success: boolean }> {

        const res = await fetch(`${process.env.API_URL}feedback`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                reason: feedback.reason,
                type: feedback.type
            })
        })
        return res.json()
    }

    return { postFeedback };
}