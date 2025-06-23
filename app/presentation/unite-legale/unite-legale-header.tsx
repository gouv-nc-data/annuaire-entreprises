import { IUniteLegale } from "~/domain/entity/unite-legale";
import UniteLegaleStatus from "./unite-legale-status";
import UniteLegaleTextDescription from "./unite-legale-text-description";
import { IEtablissement } from "~/domain/entity/etablissement";
import EtablissementTextDescription from "./etablissement/etablissement-text-description";
import SituationStatus from "./common/situation-status";
import BasicInformation from "./common/basic-information";
import { formatRid } from "~/utils/format-rid";
import CommonRidetStatus from "./common/common-ridet-status";

export default function UniteLegaleHeader({ uniteLegale, showShareButton, etablissement }: { uniteLegale: IUniteLegale, showShareButton?: boolean, etablissement?: IEtablissement }) {

    return (
        <header className="flex flex-col gap-4 flex-1">
            <div className="flex items-start gap-20 w-full">
                <div className="flex flex-col gap-10 border-slate-200 w-full">
                    <div className="flex w-full flex-col sm:flex-row justify-between items-start gap-6">
                        <div className="flex flex-col gap-2">
                            <div className="flex md:flex-row items-start md:items-center flex-col gap-4 md:gap-6">
                                <h1 className={`inline-block text-2xl tracking-wide font-medium`}>
                                    {etablissement ?
                                        <div className="text-slate-900 flex flex-col md:flex-row md:inline items-start md:items-center gap-2">
                                            <span className="md:pe-2">Établissement</span>
                                            {etablissement.nom_complet}({uniteLegale.sigle ? uniteLegale.sigle : uniteLegale.designation})
                                        </div>
                                        :
                                        <BasicInformation extraClass="!text-slate-900 !text-2xl !tracking-wide !font-medium" information={uniteLegale.nom_complet} />
                                    }
                                </h1>
                            </div>
                            {
                                etablissement
                                    ? null
                                    : <CommonRidetStatus uniteLegale={uniteLegale} etablissement={etablissement} />
                            }
                        </div>
                    </div>
                    {
                        etablissement
                            ? null
                            : <UniteLegaleTextDescription uniteLegale={uniteLegale} />
                    }

                </div>
            </div>

        </header>
    )
}
