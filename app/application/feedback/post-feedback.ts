import type { ActionFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Repository } from "~/adapter/repository";
import { IFeedback } from "~/domain/entity/feedback";

export async function postFeedback({ request }: ActionFunctionArgs) {
    const formData = await request.formData();
    const reason = String(formData.get('reason'))
    const type = String(formData.get('type')) as IFeedback['type']

    const response = await Repository.feedback.postFeedback({ reason, type })

    if (!response.success) {
        return redirect('/retours-usagers?success=false')
    }

    return redirect('/retours-usagers?success=true')
};