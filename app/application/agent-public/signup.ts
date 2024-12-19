import type { ActionFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Repository } from "~/adapter/repository";

export async function signup({ request }: ActionFunctionArgs) {
    const formData = await request.formData();
    const email = String(formData.get('email'))

    const response = await Repository.agentPublic.signup({ email })

    if (!response.success) {
        throw json("Something went wrong", { status: 400 });
    }

    return redirect('/agent-public')
};