import { IUniteLegale } from "~/domain/entity/unite-legale";
import UniteLegaleStatus from "../unite-legale-status";
import { IEtablissement } from "~/domain/entity/etablissement";
import { formatRid } from "~/utils/format-rid";
import SituationStatus from "./situation-status";

export default function CommonRidetStatus({ uniteLegale, etablissement }: { uniteLegale?: IUniteLegale, etablissement?: IEtablissement }) {
    return (
        <div className="flex items-start justify-between w-full">
            <div className="flex items-center gap-2">
                <span className={`flex items-center text-lg text-primary font-medium`}>{etablissement ? formatRid(etablissement.ridet as string) : uniteLegale && formatRid(uniteLegale.rid as string)}</span>
                {
                    etablissement
                        ? <SituationStatus situation={etablissement.situation} />
                        : uniteLegale && <UniteLegaleStatus etatRid={uniteLegale.etat_rid} />
                }
            </div>
        </div>
    )
}
