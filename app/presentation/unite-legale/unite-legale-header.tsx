import { Link } from "@remix-run/react";
import UniteLegaleCategory from "./unite-legale-category";
import { CornerDownRightIcon } from "lucide-react";
import { IUniteLegale } from "~/domain/entity/unite-legale";
import UniteLegaleStatus from "./unite-legale-status";
import UniteLegaleTextDescription from "./unite-legale-text-description";
import UniteLegaleShareButton from "./unite-legale-share-button";

export default function UniteLegaleHeader({ uniteLegale }: { uniteLegale: IUniteLegale }) {
    return (
        <header className="flex flex-col gap-4">
            <div className="flex">
                <h1 className="text-2xl tracking-wide text-blue-dinum font-medium border-b-2 border-blue-dinum">{uniteLegale.nom_complet}</h1>
            </div>
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                    <UniteLegaleCategory category={"entreprise"} />
                    <span className="flex items-center gap-2 text-lg text-blue-900">
                        ‣ {uniteLegale.ridet}
                    </span>
                    <UniteLegaleStatus dateRadiation={uniteLegale.date_radiation} />
                </div>
                <UniteLegaleShareButton ridet={uniteLegale.ridet} />
            </div>
            {
                uniteLegale.etablissements && uniteLegale.etablissements.length > 0 &&
                <Link to={`/`} className="relative underline underline-offset-4 before:w-6 before:h-4 before:border-s-1 before:absolute before:-top-3 before:left-0 before:border-slate-300">
                    <CornerDownRightIcon strokeWidth={1.4} className="absolute  -left-[3px] top-0 w-5 h-5 text-slate-300" />
                    <span className='text-slate-500 font-normal text-md ps-6'>{`${uniteLegale.etablissements.length} ${uniteLegale.etablissements.length > 1 ? 'établissements' : 'établissement'}`}</span>
                </Link>
            }
            <div>
                <UniteLegaleTextDescription uniteLegale={uniteLegale} />
            </div>
        </header>
    )
}
