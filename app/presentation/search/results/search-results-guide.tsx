import { Landmark, MapPinned, Scale, User, CornerLeftUpIcon } from "lucide-react";

export default function SearchResultsGuide() {
    return (
        <div className="flex flex-col items-start gap-2">
            <div className="flex flex-col gap-4 w-full items-start">
                <h3 className="text-blue-dinum font-medium text-xl flex items-center gap-2 max-w-4xl">
                    <CornerLeftUpIcon strokeWidth={1.5} className="w-10 h-10 text-blue-dinum -translate-y-3" />
                    Grâce aux filtres de recherche, retrouvez n’importe quelle entreprise, association, ou service public en Nouvelle-Calédonie.
                </h3>
            </div>
        </div>
    )
}
