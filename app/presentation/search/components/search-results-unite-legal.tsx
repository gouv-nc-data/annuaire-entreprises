import { Link } from "@remix-run/react"
import { MapPin, User, ChevronRight } from "lucide-react"
import { IUniteLegal } from "~/domain/entity/unite-legal"
import UniteLegalCategory from "~/presentation/unite-legal/unite-legal-category"

export default function SearchResultsUniteLegal({ uniteLegal }: { uniteLegal: IUniteLegal }) {
    return (
        <div className="flex flex-col items-start">
            <Link to={`/entreprise/${uniteLegal.ridet}`} className="group">
                <div className="flex items-center gap-4">
                    <p className="text-primary uppercase group-hover:underline">{uniteLegal.nom_complet}</p>
                    <UniteLegalCategory category="entreprise" />
                </div>
                <div className="flex flex-col ps-2 border-s-2">
                    <div className="flex items-center gap-1 text-slate-600">
                        <ChevronRight className="w-4 h-4" />
                        <p className="text-sm font-normal">{uniteLegal.ridet}</p>
                    </div>
                    <div className="flex items-center gap-1 text-slate-600">
                        <User className="w-4 h-4" />
                        <p className="text-sm font-normal">{uniteLegal.designation}</p>
                    </div>
                    <div className="flex items-center gap-1 text-slate-600">
                        <MapPin className="w-4 h-4" />
                        <p className="text-sm font-normal">{uniteLegal.adresse_complete}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
