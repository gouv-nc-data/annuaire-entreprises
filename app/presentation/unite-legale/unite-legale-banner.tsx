import { IUniteLegale } from "~/domain/entity/unite-legale";
import UniteLegaleShareButton from "./unite-legale-share-button";

import { ChevronRight } from "lucide-react";
import { Link } from "@remix-run/react";
import { IEtablissement } from "~/domain/entity/etablissement";
import BasicInformation from "./common/basic-information";

export default function UniteLegalBanner({ uniteLegale, etablissement }: { uniteLegale: IUniteLegale, etablissement?: IEtablissement }) {
    return (
        <div className={`${etablissement ? 'bg-orange-200' : 'bg-blue-200'} py-3 border-b-1 border-slate-200`}>
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center gap-2">
                <div className="flex items-center gap-2">
                    {etablissement
                        ? <div className="text-sm text-primary font-medium flex flex-col items-start md:flex-row md:items-center gap-1">
                            Entreprise :
                            <Link to={`/entreprise/${uniteLegale.rid}`} className="text-blue-dinum font-medium hover:underline"><BasicInformation extraClass="!text-blue-dinum" isBold information={uniteLegale.nom_complet} /></Link>
                            <ChevronRight className="w-4 h-4 hidden md:inline-flex" />
                            Etablissements
                            <ChevronRight className="w-4 h-4 hidden md:inline-flex" />
                            <div className="inline-flex items-center gap-1">
                                {etablissement.enseigne && <span className="text-blue-dinum font-medium"><BasicInformation extraClass="!text-orange-600" isBold information={etablissement.enseigne} /></span>}
                                {etablissement.designation && <span className="text-orange-600 font-medium">{etablissement.designation}</span>}
                                <span className="text-orange-600 font-medium">({uniteLegale.sigle ? uniteLegale.sigle : uniteLegale.designation})</span>
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
