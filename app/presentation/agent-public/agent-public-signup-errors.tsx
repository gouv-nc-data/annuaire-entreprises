import { useRouteError, isRouteErrorResponse } from "@remix-run/react";
import { Link } from "@remix-run/react"

import { Button } from "../ui/button"
import { Search, TriangleAlert } from "lucide-react";

import LoginIllustration from '/login-illustration.png'

export function AgentPublicSignupErrors() {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        return (
            <div>
                <div>
                    <div className="max-w-4xl w-full mx-auto px-4 py-20">
                        <header className="flex flex-col items-center gap-20 w-full">
                            <div className="flex flex-col gap-10 w-full items-center">
                                <div className="flex flex-col gap-6 w-full text-center items-center justify-center">
                                    <TriangleAlert className="w-10 h-10 text-red-600"/>
                                    <h1 className="text-4xl text-red-600 font-medium flex items-center gap-2"> Mince, quelque chose s'est mal passé !</h1>
                                </div>
                                <div className="w-full flex items-center justify-center max-w-md text-center">
                                    <img className="w-full" src={LoginIllustration} alt="Illustrations agents publiques | Annuaire entreprise" />
                                </div>
                                <div className="flex items-center gap-2">
                                    <Link to={'/'}><Button><Search />Faire une recherche</Button></Link>
                                    <Link to={'/se-connecter'}><Button variant={"outline"}>Essayer à nouveau</Button></Link>
                                </div>
                            </div>
                        </header>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className="py-10 max-w-7xl mx-auto px-4">
                <span>quelque chose s'est mal passé</span>
            </div>
        </div>
    );
}