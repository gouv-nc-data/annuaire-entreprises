import { Link } from "@remix-run/react";

import { IEtablissement } from "~/domain/entity/etablissement";
import BasicInformation from "../common/basic-information";
import SituationStatus from "../common/situation-status";
import { formatCommonDate } from "~/utils/format-date";

export default function UniteLegaleEtablissement({ etablissement }: { etablissement: IEtablissement }) {
    return (
        <li className='flex flex-col md:grid md:grid-cols-12 w-full items-start md:gap-4 gap-3 py-2 md:py-0 border-b-1 border-slate-300 last:border-0 md:border-0'>
            <div className='col-span-1'>
                <span className="block md:hidden text-base font-medium text-primary pb-2">RIDET</span>
                <Link to={`/etablissement/${etablissement.ridet}`} className="!text-blue-dinum hover:underline">
                    <span className={`text-blue-dinum font-medium text-sm`}>{etablissement.rid}</span>
                    <br />
                    <span className={`text-blue-dinum font-medium text-sm`}>{etablissement.et}</span>
                </Link>
            </div>
            <div className='col-span-3'>
                <span className="block md:hidden text-base font-medium text-primary">Activité (NAF/APE)</span>
                <BasicInformation information={etablissement.ape} isSmall />
                {etablissement.code_ape && <p> (<BasicInformation information={etablissement.code_ape} isSmall />)</p>}
            </div>
            <div className='col-span-3 flex flex-col md:flex-row md:inline-block gap-1 items-start'>
                <span className="block md:hidden text-base font-medium text-primary">Détails (nom, enseigne, adresse)</span>
                <BasicInformation information={etablissement.nom_complet} isSmall />
                <BasicInformation information={' ' + etablissement.adresse_physique} isSmall />
            </div>
            <div className='col-span-2'>
                <span className="block md:hidden text-base font-medium text-primary">Création</span>
                <BasicInformation information={formatCommonDate(etablissement.date_creation as string)} isSmall />
            </div>
            <div className='col-span-3'>
                <span className="block md:hidden text-base font-medium text-primary">État</span>
                <SituationStatus situation={etablissement.situation} isSmall />
            </div>
        </li>
    )
}
