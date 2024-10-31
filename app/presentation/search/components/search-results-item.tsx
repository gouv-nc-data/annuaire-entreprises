import { Link } from "@remix-run/react"
import { MapPin, Building2, User, ChevronRight } from "lucide-react"
import { UniteLegal } from "~/domain/entity/unite-legal"

export default function SearchResultsItem({ result }: { result: UniteLegal }) {
    return (
        <div className="flex flex-col items-start">
            <Link to={`/entreprise/${result.ridet}`} className="group">
                <div className="flex items-center gap-4">
                    <p className="text-primary uppercase group-hover:underline">{result.nom_complet}</p>
                    <div className="tag bg-slate-200">
                        <Building2 className="w-6 h-6 bg-blue p-1 text-primary fill-slate-300" />
                        <span className="font-normal pe-2 text-slate-700">Entreprise</span>
                    </div>
                </div>
                <div className="flex flex-col ps-2 border-s-2">
                    <div className="flex items-center gap-1 text-slate-600">
                        <ChevronRight className="w-4 h-4" />
                        <p className="text-sm font-normal">{result.ridet}</p>
                    </div>
                    <div className="flex items-center gap-1 text-slate-600">
                        <User className="w-4 h-4" />
                        <p className="text-sm font-normal">{result.sigle}</p>
                    </div>
                    <div className="flex items-center gap-1 text-slate-600">
                        <MapPin className="w-4 h-4" />
                        <p className="text-sm font-normal">{result.adresse_complete}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
