import { IUniteLegale } from "~/domain/entity/unite-legale";
import UniteLegaleShareButton from "./unite-legale-share-button";

import { Building2, ChevronRight } from "lucide-react";
import { Link } from "@remix-run/react";
import { IEtablissement } from "~/domain/entity/etablissement";

export default function UniteLegalBanner({ uniteLegale, etablissement }: { uniteLegale: IUniteLegale, etablissement?: IEtablissement }) {
    return (
        <div className={`${etablissement ? 'bg-orange-200' : 'bg-blue-200'} py-3 border-b-1 border-slate-200`}>
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center gap-2">
                <div className="flex items-center gap-2">
                    {etablissement
                        ? <div className="text-sm text-primary font-medium flex items-center gap-1">
                            Entreprise :
                            <Link to={`entreprise/${uniteLegale.rid}`} className="text-blue-dinum font-medium hover:underline">{uniteLegale.nom_complet}</Link>
                            <ChevronRight className="w-4 h-4" />
                            Etablissements
                            <ChevronRight className="w-4 h-4" />
                            <div className="inline-flex items-center gap-1">
                                <span className="text-blue-dinum font-medium">{etablissement.enseigne}</span>
                                <span className="text-blue-dinum font-medium">{etablissement.designation}</span>
                            </div>
                        </div>
                        : <div className="text-sm text-primary font-medium flex items-center gap-1">
                            <ChevronRight className="w-4 h-4" />
                            Entreprise
                        </div>
                    }
                </div>
                <UniteLegaleShareButton rid={uniteLegale.rid} align="end" />
            </div>
        </div >
    )
}
