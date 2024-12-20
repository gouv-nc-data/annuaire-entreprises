import { Link } from "@remix-run/react"
import { IEtablissement } from '~/domain/entity/etablissement'
import { CornerDownRightIcon } from "lucide-react"
import { IUniteLegale } from "~/domain/entity/unite-legale"

export default function SearchResultsUniteLegaleEtablissements({ etablissements, rid }: { etablissements: IEtablissement[], rid: IUniteLegale['rid'] }) {

    return (
        <div>
            <ul className='flex flex-col'>
                {
                    etablissements.slice(0, 3).map((etablissement, index) =>
                        <li key={index} className="relative flex items-center border-s-1 border-slate-300">
                            <figure className="w-4 h-[1px] bg-slate-300" />
                            <Link to={`/etablissement/${etablissement.ridet}`} className="ps-2 hover:underline flex items-center gap-1">
                                <span className='address'>{etablissement.nom_complet}</span>
                                <span className='address'>{etablissement.adresse_complete}</span>
                            </Link>
                        </li>
                    )
                }
                <Link to={`/entreprise/${rid}#etablissements`} className="relative before:w-6 before:h-4 before:border-s-1 before:absolute before:-top-3 before:left-0 before:border-slate-300">
                    <CornerDownRightIcon strokeWidth={1.4} className="absolute  -left-[3px] top-0 w-5 h-5 text-slate-300" />
                    <span className='text-blue-dinum font-normal text-md ps-6 hover:underline'>{`${etablissements.length} ${etablissements.length > 1 ? 'établissements' : 'établissement'} en activité`}</span>
                </Link>
            </ul>
        </div>
    )
}
