import { Link } from "@remix-run/react";

import { IEtablissement } from "~/domain/entity/etablissement";
import { IUniteLegale } from "~/domain/entity/unite-legale";
import TooltipInfo from "~/presentation/ui/tooltip-info";
import { formatDate } from "~/utils/format-date";

import { Building, MapPin } from "lucide-react";
import BasicInformation from "../common/basic-information";
import { formatRid } from "~/utils/format-rid";

export default function EtablissementTextDescription({ uniteLegale, etablissement }: { uniteLegale: IUniteLegale, etablissement: IEtablissement }) {

    const creationDate = uniteLegale.date_creation ? formatDate(uniteLegale.date_creation) : null
    const fromDate = uniteLegale.date_creation ? new Date(uniteLegale.date_creation) : null
    const now = new Date()
    const yearDifference = fromDate?.getFullYear() ? now.getFullYear() - fromDate?.getFullYear() : null

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-0">
                <div className="text-common inline">
                    <p className="">
                        <TooltipInfo
                            label='Cet établissement'
                            content="Une société est constituée d’autant d’établissements qu’il y a de lieux différents où elle exerce - ou a exercé - son activité. Il faut bien distinguer la fiche résumé de l'entreprise et les fiches de ses établissements."
                            isEtablissement
                        />
                        {` immatriculé sous le ridet ${formatRid(etablissement.ridet as string)}`}
                        {` est `}<BasicInformation extraClass="!lowercase" information={etablissement.situation} />
                        {`. Son domaine d'activité est : `} <BasicInformation information={etablissement.ape} /> {etablissement.code_ape ? `(${etablissement.code_ape})` : ''}
                    </p>
                </div>
            </div>
            <div>
                <p className="flex items-center gap-1 text-common">
                    <MapPin className="w-4 h-4 text-blue-dinum hidden md:inline-flex" />
                    {
                        uniteLegale.adresse_complete &&
                        <>
                            Il est situé au <BasicInformation information={etablissement.adresse_complete} />
                        </>
                    }
                </p>
            </div>
        </div>
    )
}
