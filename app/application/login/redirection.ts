import type { LoaderFunctionArgs } from "@remix-run/node";
import { authenticator } from "~/services/auth.server";

export async function isAuthenticatedLoader({ request }: LoaderFunctionArgs) {
    return await authenticator.isAuthenticated(request, {
        successRedirect: "/",
    });
};