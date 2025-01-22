import { Link } from "@remix-run/react";
import { IdCard, CornerDownRightIcon } from "lucide-react";
import { IUniteLegale } from "~/domain/entity/unite-legale";
import UniteLegaleStatus from "./unite-legale-status";
import UniteLegaleTextDescription from "./unite-legale-text-description";
import UniteLegaleShareButton from "./unite-legale-share-button";
import { IEtablissement } from "~/domain/entity/etablissement";
import EtablissementTextDescription from "./etablissement/etablissement-text-description";
import SituationStatus from "./common/situation-status";
import BasicInformation from "./common/basic-information";

export default function UniteLegaleHeader({ uniteLegale, showShareButton, etablissement }: { uniteLegale: IUniteLegale, showShareButton?: boolean, etablissement?: IEtablissement }) {

    return (
        <header className="flex flex-col gap-4">
            <div className="flex items-start gap-20 w-full">
                <div className="flex flex-col gap-10 border-slate-200 w-full">
                    <div className="flex w-full flex-col sm:flex-row justify-between items-start gap-6">
                        <div className="flex flex-col gap-4">
                            <div className="flex md:flex-row items-start md:items-center flex-col gap-4 md:gap-6">
                                <h1 className="inline-block text-2xl tracking-wide text-blue-dinum font-medium border-b-2 border-blue-dinum">
                                    {etablissement ?
                                        <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                                            <span>Établissement</span>
                                            <BasicInformation information={etablissement.nom_complet} /> ({uniteLegale.sigle ? uniteLegale.sigle : uniteLegale.designation})
                                        </div>
                                        :
                                        <BasicInformation information={uniteLegale.nom_complet} />
                                    }
                                </h1>
                                {
                                    etablissement
                                        ? <SituationStatus situation={etablissement.situation} />
                                        : <UniteLegaleStatus etatRid={uniteLegale.etat_rid} />
                                }
                            </div>
                            <div className="flex items-start justify-between w-full">
                                <div className="flex items-center gap-2">
                                    <span className={`flex items-center gap-2 text-lg text-primary font-medium border-2  ${etablissement ? 'bg-orange-100 border-orange-dinum' : 'bg-blue-100 border-blue-dinum'} rounded-2xl px-4 py-1`}>
                                        <IdCard className={`w-5 h-5 ${etablissement ? 'text-orange-600' : 'text-blue-dinum'}`} /> <strong className={`${etablissement ? 'text-orange-600' : 'text-blue-dinum'} font-medium`}>{etablissement ? 'RIDET' : 'RID'} ‣</strong> {etablissement ? etablissement.ridet : uniteLegale.rid}
                                    </span>
                                </div>
                            </div>
                            {
                                !etablissement && uniteLegale.etablissements && uniteLegale.etablissements.length > 0 &&
                                <Link to={`#etablissements`} className="relative underline underline-offset-4 before:w-6 before:h-4 before:border-s-1 before:absolute before:-top-3 before:left-0 before:border-slate-300">
                                    <CornerDownRightIcon strokeWidth={1.4} className="absolute  -left-[3px] top-0 w-5 h-5 text-slate-300" />
                                    <span className='text-slate-500 font-normal text-md ps-6'>{`${uniteLegale.etablissements.length} ${uniteLegale.etablissements.length > 1 ? 'établissements' : 'établissement'}`}</span>
                                </Link>

                            }
                        </div>
                        {showShareButton &&
                            <UniteLegaleShareButton rid={uniteLegale.rid} align="end" />
                        }
                    </div>
                    {
                        etablissement
                            ? <EtablissementTextDescription uniteLegale={uniteLegale} etablissement={etablissement} />
                            : <UniteLegaleTextDescription uniteLegale={uniteLegale} />
                    }

                </div>
            </div>

        </header>
    )
}
