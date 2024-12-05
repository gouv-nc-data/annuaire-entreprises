import { type MetaFunction } from "@remix-run/node";

import { MapPinned, User, Scale, Landmark } from "lucide-react";
import SearchModal from "./search/search-modal";
import SearchAdvancesLink from "./search/search-advanced-link";

export const meta: MetaFunction = () => {
    return [
        { title: "Annuaire entreprise | Site" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};

export default function HomePage() {
    return (
        <div className="flex flex-col gap-4 items-center justify-center h-full">
            <div className="flex flex-col items-center gap-6 max-w-xl w-full p-4 py-20 md:py-40">
                <div className="flex flex-col gap-4 w-full items-center">
                    <div className="flex flex-col gap-0 w-full">
                        <h1 className="text-4xl text-blue-dinum font-medium">L'Annuaire des entreprises</h1>
                        <h2 className="text-xl text-primary">De Nouvelle-Calédonie.</h2>
                    </div>
                    <p className="text-zinc-900 font-light text-md">Vérifiez les informations légales publiques des entreprises, associations et services publics en Nouvelle-Calédonie.</p>
                </div>
                <div className="flex flex-col items-start gap-2">
                    <div className="sm:flex hidden gap-2">
                        <div className="flex flex-col gap-6 border-1 border-zinc-200 rounded-xl p-4">
                            <span className="text-xs leading-tight font-medium text-zinc-700">Par son emplacement</span>
                            <MapPinned className="w-4 h-4 text-blue-dinum" />
                        </div>
                        <div className="flex flex-col gap-6 border-1 border-zinc-200 rounded-xl p-4">
                            <span className="text-xs leading-tight font-medium text-zinc-700">Par ses dirigeants</span>
                            <User className="w-4 h-4 text-blue-dinum" />
                        </div>
                        <div className="flex flex-col gap-6 border-1 border-zinc-200 rounded-xl p-4">
                            <span className="text-xs leading-tight font-medium text-zinc-700">Par sa forme juridique</span>
                            <Scale className="w-4 h-4 text-blue-dinum" />
                        </div>
                        <div className="flex flex-col gap-6 border-1 border-zinc-200 rounded-xl p-4">
                            <span className="text-xs leading-tight font-medium text-zinc-700">Par son type de structure</span>
                            <Landmark className="w-4 h-4 text-blue-dinum" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-2 bg-white w-full p-6 rounded-2xl shadow-sm">
                    <p>Recherche une entreprise</p>
                    <SearchModal />
                </div>
                <SearchAdvancesLink />
            </div>
        </div>
    );
}