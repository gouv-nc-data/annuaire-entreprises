import { Link } from "@remix-run/react";

import { IDirigeant } from "~/domain/entity/dirigeant";
import BasicInformation from "../common/basic-information";

import { ArrowRight } from "lucide-react";

export default function UniteLegaleDirigeant({ dirigeant }: { dirigeant: IDirigeant }) {
    return (
        <li className='flex flex-col md:grid md:grid-cols-12 w-full items-start md:gap-4 gap-3 py-2 md:py-0 border-b-1 border-slate-300 last:border-0 md:border-0'>
            <div className='col-span-3'>
                <span className="block md:hidden text-base font-medium text-primary">Role</span>
                <BasicInformation information={dirigeant.role} isBold />
            </div>
            <div className='col-span-7'>
                <span className="block md:hidden text-base font-medium text-primary">Details</span>
                <span className={`text-slate-800 font-normal text-sm`}>{dirigeant.nom}</span>
                {dirigeant.date_naissance && <span className={`text-slate-800 font-normal text-sm`}>, né(e) en {dirigeant.date_naissance}</span>}
            </div>
            <div className='col-span-2'>
                <span className="block md:hidden text-base font-medium text-primary">Action</span>
                <Link to={'/'} className="inline-flex items-center link">
                    <ArrowRight className="w-4 h-4" />
                    voir ses entreprises
                </Link>
            </div>
        </li>
    )
}
