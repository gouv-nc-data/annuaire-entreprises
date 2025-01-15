import { Link } from "@remix-run/react";

import { formatPythonStringToJson } from "~/utils/format-string-json";

import { IDirigeant, IFonctionDirigeant } from "~/domain/entity/dirigeant";
import BasicInformation from "../common/basic-information";


import { ArrowRight } from "lucide-react";
import { formatBirthDate } from "~/utils/format-date";

export default function UniteLegaleDirigeant({ dirigeant }: { dirigeant: IDirigeant }) {

    const fonctions = dirigeant.fonction ? formatPythonStringToJson(dirigeant.fonction) as IFonctionDirigeant[] : null
    const birthDate = dirigeant.date_naissance ? formatBirthDate(dirigeant.date_naissance) : null

    console.log('birth date : ', birthDate)


    return (
        <li className='flex flex-col md:grid md:grid-cols-12 w-full items-start md:gap-4 gap-3 py-2 md:py-0 border-b-1 border-slate-300 last:border-0 md:border-0'>
            <div className='col-span-3'>
                <span className="block md:hidden text-base font-medium text-primary">Role</span>
                {
                    fonctions && fonctions.map((fonction, index) =>
                        <BasicInformation key={index} information={index > 0 ? `, ${fonction.Qualite.Libelle}` : `${fonction.Qualite.Libelle}`} isBold />
                    )
                }
            </div>
            <div className='col-span-7'>
                <span className="block md:hidden text-base font-medium text-primary">Details</span>
                <span className={`text-slate-800 font-normal text-sm`}>{dirigeant.nom}</span>
                {birthDate && <span className={`text-slate-800 font-normal text-sm`}>, né(e) en {birthDate}</span>}
            </div>
            <div className='col-span-2'>
                <span className="block md:hidden text-base font-medium text-primary">Action</span>
                <Link to={`/rechercher?dirigeant=${dirigeant.nom}`} className="inline-flex items-center link">
                    <ArrowRight className="w-4 h-4" />
                    voir ses entreprises
                </Link>
            </div>
        </li>
    )
}
