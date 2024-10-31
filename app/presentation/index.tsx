import { type MetaFunction } from "@remix-run/node";

import SearchBar from "./search/components/search-bar";

export const meta: MetaFunction = () => {
    return [
        { title: "Annuaire entreprise | Site" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};

export default function HomePage() {
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="flex flex-col gap-4 items-center">
                <h1>Annuaire entreprise</h1>
                <SearchBar />
            </div>
        </div>
    );
}