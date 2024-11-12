import { ActionFunctionArgs } from "@remix-run/node";
import { authenticator } from "~/services/auth.server";

export async function authenticateAction({ request }: ActionFunctionArgs) {
    return await authenticator.authenticate("user-pass", request, {
        successRedirect: "/",
        failureRedirect: "/login",
    });
};