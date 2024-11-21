import { Link } from "@remix-run/react"
import { MapPin } from "lucide-react"
import { IUniteLegale } from "~/domain/entity/unite-legale"
import UniteLegaleCategory from "~/presentation/unite-legale/unite-legale-category"
import SearchResultsUniteLegaleDirigeants from "./search-results-unite-legale-dirigeants"
import SearchResultsUniteLegaleEtablissements from "./search-results-unite-legale-etablissements"

export default function SearchResultsUniteLegale({ uniteLegale }: { uniteLegale: IUniteLegale }) {

    console.log(uniteLegale)

    return (
        <div className="flex flex-col items-start gap-2">
            <Link to={`/entreprise/${uniteLegale.ridet}`} className="group flex flex-col gap-2">
                <div className="flex flex-col gap-0">
                    <div className="flex flex-col gap-0">
                        <div className="flex items-center gap-4">
                            <p className="text-blue-800 uppercase group-hover:underline font-normal text-lg">{uniteLegale.nom_complet}</p>
                            <UniteLegaleCategory category="entreprise" />
                        </div>
                        <div className="flex items-center gap-2">
                            {uniteLegale.ape && <p className="text-slate-800 text-md font-normal">{uniteLegale.ape}</p>}
                            {uniteLegale.code_ape && <p className="text-slate-800 text-md font-normal">({uniteLegale.code_ape})</p>}
                        </div>
                    </div>
                    <div className="flex items-center gap-0">
                        {
                            uniteLegale.dirigeants && uniteLegale.dirigeants.length > 0 &&
                            <SearchResultsUniteLegaleDirigeants dirigeants={uniteLegale.dirigeants} />
                        }
                    </div>
                </div>
            </Link>
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1 text-slate-600">
                    <MapPin className="w-5 h-5" />
                    <p className="address">{uniteLegale.adresse_complete}</p>
                </div>
                <div className="flex flex-col ms-6">
                    {
                        uniteLegale.etablissements && uniteLegale.etablissements.length > 0 &&
                        <SearchResultsUniteLegaleEtablissements etablissements={uniteLegale.etablissements} />
                    }
                </div>
            </div>
        </div>
    )
}
