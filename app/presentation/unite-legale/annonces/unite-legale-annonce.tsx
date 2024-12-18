import { Link } from "@remix-run/react";

import BasicInformation from "../common/basic-information";

import { ExternalLink, ArrowRight } from "lucide-react";
import { IAnnonce } from "~/domain/entity/annonce";
import { Button } from "~/presentation/ui/button";

export default function UniteLegaleAnnonce({ annonce }: { annonce: IAnnonce }) {
    return (
        <li className='flex flex-col md:grid md:grid-cols-12 w-full items-start md:gap-4 gap-3 py-2 md:py-0 border-b-1 border-slate-300 last:border-0 md:border-0'>
            <div className='col-span-2'>
                <span className="block md:hidden text-base font-medium text-primary">Publication</span>
                <BasicInformation information={annonce.publication} isBold />
            </div>
            <div className='col-span-8'>
                <span className="block md:hidden text-base font-medium text-primary">Details</span>
                <span className={`text-slate-800 font-normal text-sm`}>{annonce.details}</span>
            </div>
            <div className='col-span-2'>
                <span className="block md:hidden text-base font-medium text-primary">Lien</span>
                <Link to="/se-connecter">
                    <Button variant={'secondary'}>
                        <ArrowRight className='w-4 h-4' />
                        Consulter
                        <ExternalLink className='w-4 h-4' />
                    </Button>
                </Link>
            </div>
        </li>
    )
}
