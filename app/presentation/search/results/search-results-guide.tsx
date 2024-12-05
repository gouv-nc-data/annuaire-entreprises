import { Landmark, MapPinned, Scale, User, CornerLeftUpIcon } from "lucide-react";

export default function SearchResultsGuide() {
    return (
        <div className="flex flex-col items-start gap-2">
            <div className="flex flex-col gap-4 w-full items-start">
                <h3 className="text-blue-dinum font-medium text-xl flex items-center gap-2">
                    <CornerLeftUpIcon strokeWidth={1.5} className="w-10 h-10 text-blue-dinum -translate-y-3" />
                    Grâce aux filtres de recherche, retrouvez n’importe quelle entreprise, association, ou service public en Nouvelle-Calédonie.
                </h3>
                <p className="text-zinc-900 font-light text-md">Vérifiez les informations légales publiques des entreprises, associations et services publics en Nouvelle-Calédonie.</p>
            </div>
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
    )
}
