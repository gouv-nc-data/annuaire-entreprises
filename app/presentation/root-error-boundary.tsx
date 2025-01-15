import { isRouteErrorResponse, useRouteError } from "@remix-run/react";
import SearchFilters from "./search/search-filters/search-filters";
import LoginIllustration from '/login-illustration.png'
import { CircleX, CornerDownRight } from "lucide-react";
import SearchAdvancesLink from "./search/search-advanced-link";
import SearchModal from "./search/search-modal";

export function RootErrorBoundary() {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        return (
            <div>
                <SearchFilters />
                <div className="flex flex-col gap-4 items-center justify-center h-full w-full">
                    <div className="flex flex-col items-center gap-6 max-w-xl w-full p-4 py-20 md:py-40">
                        <div className="flex flex-col gap-4 w-full items-center">
                            <div className="flex flex-col gap-0 w-full">
                                {error.data
                                    ? <h1 className="text-4xl text-blue-dinum font-medium flex items-center gap-2">L'Annuaire des entreprises</h1>
                                    : <h1 className="text-4xl font-medium flex items-center gap-2 text-red-500"><CircleX strokeWidth={2.5} className="w-8 h-8 text-red-500" />Oops, une erreur s'est produite</h1>
                                }
                            </div>
                            {error.data
                                ? <h2 className="text-xl text-primary flex items-start gap-2"><CornerDownRight className="w-7 h-7 -mt-[2px]" /> {error.data}</h2>
                                : <h2 className="text-xl text-primary"><CornerDownRight /> Quelque chose s'est mal passé</h2>
                            }
                        </div>

                        <div className="flex flex-col items-start gap-2 bg-white w-full p-6 rounded-2xl shadow-sm">
                            <p>Recherche une entreprise</p>
                            <SearchModal />
                        </div>
                        <SearchAdvancesLink />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <SearchFilters />
            <div className="flex flex-col gap-4 items-center justify-center h-full w-full">
                <div className="flex flex-col items-center gap-6 max-w-xl w-full p-4 py-20 md:py-40">
                    <div className="flex flex-col gap-4 w-full items-center">
                        <div className="flex flex-col gap-0 w-full">
                            <h1 className="text-4xl text-blue-dinum font-medium flex items-center gap-2 text-red-500"><CircleX strokeWidth={2.5} className="w-8 h-8 text-red-500" />Oops, une erreur s'est produite</h1>
                        </div>
                        <h2 className="text-xl text-primary"><CornerDownRight /> Quelque chose s'est mal passé</h2>
                    </div>

                    <div className="flex flex-col items-start gap-2 bg-white w-full p-6 rounded-2xl shadow-sm">
                        <p>Recherche une entreprise</p>
                        <SearchModal />
                    </div>
                    <SearchAdvancesLink />
                </div>
            </div>
        </div>
    );
}