import { IUniteLegale } from "~/domain/entity/unite-legale";
import UniteLegaleNavigation from "../unite-legale-navigation";
import { Link } from "@remix-run/react";
import CommonRidetStatus from "../common/common-ridet-status";
import { IEtablissement } from "~/domain/entity/etablissement";
import { CornerDownRightIcon } from "lucide-react";

export default function EtablissementUniteLegaleResume({ uniteLegale, etablissement }: { uniteLegale: IUniteLegale, etablissement: IEtablissement }) {
    return (
        <div className="flex flex-col items-start h-full">
            <CommonRidetStatus uniteLegale={uniteLegale} etablissement={etablissement} />
            <div className="flex flex-col w-full pt-4 gap-2">
                <p className="flex items-center gap-2 text-slate-700 font-light text-base">
                    <CornerDownRightIcon strokeWidth={1.4} className="w-5 h-5 text-slate-600" />
                    Cet établissement est lié à l&apos;entreprise :
                </p>
                <div className="flex flex-col items-start bg-white p-4 rounded-xl shadow-sm border border-input w-full gap-4">
                    <div className="flex flex-col items-start gap-2">
                        <Link to={`/entreprise/${uniteLegale.rid}`} className="inline-flex text-blue-dinum border-b border-blue-dinum grow shrink-0">
                            {uniteLegale.nom_complet}
                        </Link>
                        <CommonRidetStatus uniteLegale={uniteLegale} />
                    </div>
                    <hr className="w-full" />
                    <UniteLegaleNavigation rid={uniteLegale.rid} />
                </div>
            </div>
        </div>
    )
}
