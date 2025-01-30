import { Link } from "@remix-run/react";
import BasicInformation from "../common/basic-information";
import { ExternalLink, ArrowRight } from "lucide-react";

import { IIndicateursFinanciers } from "~/domain/entity/indicateurs-financiers";
import { Button } from "~/presentation/ui/button";
import { IUniteLegale } from "~/domain/entity/unite-legale";
import { formatCommonDate } from "~/utils/format-date";

export default function UniteLegaleIndicateurFinancier({ indicateurFinancier, uniteLegale }: { uniteLegale: IUniteLegale, indicateurFinancier: IIndicateursFinanciers }) {

    return (
        <li className='flex flex-col md:grid md:grid-cols-12 w-full items-start md:gap-4 gap-3 py-2 md:py-0 border-b-1 border-slate-300 last:border-0 md:border-0'>
            <div className='col-span-2'>
                <span className="block md:hidden text-base font-medium text-primary">Publication</span>
                <BasicInformation information={formatCommonDate(indicateurFinancier.datedepot as string)} isBold />
            </div>
            <div className='col-span-8'>
                <span className="block md:hidden text-base font-medium text-primary">Details</span>
                <div className="flex flex-col gap">
                    <span className={`text-slate-800 font-normal text-sm`}>Comptes annuels et rapports de l&apos;exercice clos le {indicateurFinancier.datecloture}</span>
                    <span className={`text-slate-800 font-medium text-sm`}>Dépôt numéro : {indicateurFinancier.numerodepot}</span>
                </div>
            </div>
            <div className='col-span-2'>
                <span className="block md:hidden text-base font-medium text-primary">Lien</span>
                <Link to={`https://www.infogreffe.nc/entreprise/${uniteLegale.designation?.toLocaleLowerCase()}/${uniteLegale.rid}/`}>
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
