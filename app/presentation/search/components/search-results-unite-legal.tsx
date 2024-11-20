import { Link } from "@remix-run/react"
import { MapPin, User, ChevronRight } from "lucide-react"
import { IUniteLegale } from "~/domain/entity/unite-legale"
import UniteLegaleCategory from "~/presentation/unite-legale/unite-legale-category"

export default function SearchResultsUniteLegale({ uniteLegale }: { uniteLegale: IUniteLegale }) {
    return (
        <div className="flex flex-col items-start">
            <Link to={`/entreprise/${uniteLegale.ridet}`} className="group">
                <div className="flex items-center gap-4">
                    <p className="text-primary uppercase group-hover:underline">{uniteLegale.nom_complet}</p>
                    <UniteLegaleCategory category="entreprise" />
                </div>
                <div className="flex flex-col ps-2 border-s-2">
                    <div className="flex items-center gap-1 text-slate-600">
                        <ChevronRight className="w-4 h-4" />
                        <p className="text-sm font-normal">{uniteLegale.ridet}</p>
                    </div>
                    <div className="flex items-center gap-1 text-slate-600">
                        <User className="w-4 h-4" />
                        <p className="text-sm font-normal">{uniteLegale.designation}</p>
                    </div>
                    <div className="flex items-center gap-1 text-slate-600">
                        <MapPin className="w-4 h-4" />
                        <p className="text-sm font-normal">{uniteLegale.adresse_complete}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
