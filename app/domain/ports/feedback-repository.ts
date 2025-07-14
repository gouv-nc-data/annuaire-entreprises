import { IFeedback } from "../entity/feedback"

export interface IFeedbackRepository {
    postFeedback: (feedback: IFeedback) => Promise<{ success: boolean }>
}