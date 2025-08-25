import { type MetaFunction } from "@remix-run/node";

import { MapPinned, User, Building2, Briefcase } from "lucide-react";
import SearchAdvancesLink from "./search/search-advanced-link";
import SearchBar from "./search/search-bar";
import Footer from "./footer";

export const meta: MetaFunction = () => {
    return [
        { title: "Annuaire entreprise | Site" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};

export default function HomePage() {
    return (
        <div className="bg-zinc-50">
            <div className="flex flex-col gap-4 items-center justify-center h-full">
                <div className="flex flex-col items-center gap-6 max-w-xl w-full p-4 py-20 md:py-40">
                    <div className="flex flex-col gap-4 w-full items-center">
                        <div className="flex flex-col gap-0 w-full">
                            <h1 className="text-4xl text-blue-dinum font-medium">L'Annuaire des entreprises</h1>
                            <h2 className="text-xl text-primary">De Nouvelle-Calédonie.</h2>
                        </div>
                        <p className="text-common">Recherchez les informations légales publiques des entreprises, associations et services publics en Nouvelle-Calédonie.</p>
                    </div>
                    <div className="flex flex-col items-start gap-2 bg-white w-full p-6 rounded-2xl shadow-sm">
                        <SearchBar />
                    </div>
                    <SearchAdvancesLink />
                </div>
            </div>
            <Footer />
        </div>
    );
}