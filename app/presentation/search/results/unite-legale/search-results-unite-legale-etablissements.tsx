import { Link } from "@remix-run/react"
import { useSearchParams } from "@remix-run/react";
import { IEtablissement } from '~/domain/entity/etablissement'
import { CornerDownRightIcon } from "lucide-react"
import { IUniteLegale } from "~/domain/entity/unite-legale"
import BasicInformation from "~/presentation/unite-legale/common/basic-information"
import { removeAccents } from "~/utils/remove_accents";
import { isNonDiffusableInformation } from "~/utils/isNonDiffusableInformation";

export default function SearchResultsUniteLegaleEtablissements({ etablissements, rid }: { etablissements: IEtablissement[], rid: IUniteLegale['rid'] }) {

    const [searchParams] = useSearchParams();
    const terme = searchParams.get('terme')

    const openedEtablissements = []
    const closedEtablissements = []

    for (const etablissement of etablissements) {
        etablissement.situation?.toLowerCase().includes('radié')
            ? closedEtablissements.push(etablissement)
            : openedEtablissements.push(etablissement)
    }

    const foundEtablissementByQueryTerme = terme
        ? etablissements.find(etablissement => etablissement.nom_complet
            ? removeAccents(etablissement.nom_complet.toLowerCase()).includes(removeAccents(terme.toLowerCase()))
            : false
        )
        : null


    return (
        <div>
            <ul className='flex flex-col'>
                {
                    etablissements.length === 1
                        ? null
                        : foundEtablissementByQueryTerme
                            ?
                            <div className="relative border-s-1 border-slate-300">
                                <figure className="absolute left-0 top-3 w-3 h-[1px] bg-slate-300" />
                                <Link to={`/etablissement/${foundEtablissementByQueryTerme.ridet}`} className="block relative ps-6 hover:underline gap-1">
                                    <span className='address'><BasicInformation extraClass="!text-sm !font-light !text-primary-300 !uppercase !tracking-wide" isSmall information={foundEtablissementByQueryTerme.nom_complet} /></span>
                                    <span className='address ps-1'><BasicInformation extraClass="!text-sm !font-light !text-primary-300 !uppercase !tracking-wide" isSmall information={foundEtablissementByQueryTerme.adresse_complete} /></span>
                                </Link>
                            </div>
                            : etablissements.slice(0, 3).map((etablissement, index) =>
                                <li key={index} className="relative border-s-1 border-slate-300">
                                    <figure className="absolute left-0 top-3 w-3 h-[1px] bg-slate-300" />
                                    <Link to={`/etablissement/${etablissement.ridet}`} className="block ps-6 hover:underline gap-1">
                                        <span className='address'><BasicInformation extraClass="!text-sm !font-light !text-primary-300 !uppercase !tracking-wide" isSmall information={etablissement.nom_complet} /></span>
                                        {
                                            isNonDiffusableInformation(etablissement.adresse_complete as string)
                                                ? <span className='address'><BasicInformation extraClass="!text-sm !font-light !text-primary-300 !uppercase !tracking-wide" isSmall information={etablissement.ville_physique} /></span>
                                                : <span className='address ps-1'><BasicInformation extraClass="!text-sm !font-light !text-primary-300 !uppercase !tracking-wide" isSmall information={etablissement.adresse_complete} /></span>
                                        }
                                    </Link>
                                </li>
                            )
                }
                <div className="flex flex-col">
                    {openedEtablissements.length > 0 &&
                        <Link to={`/entreprise/${rid}#opened-etablissements`} className={`relative ${etablissements.length > 1 ? 'before:w-6 before:h-4 before:border-s-1 before:absolute before:-top-3 before:left-0 before:border-slate-300' : ''}`}>
                            <CornerDownRightIcon strokeWidth={1.4} className="absolute -left-[3px] top-0 w-5 h-5 text-slate-300" />
                            <span className='text-blue-dinum font-normal text-md ps-6 hover:underline'>{`${openedEtablissements.length} ${openedEtablissements.length > 1 ? 'établissements' : 'établissement'} en activité`}</span>
                        </Link>
                    }
                    {closedEtablissements.length > 0 &&
                        <Link to={`/entreprise/${rid}#closed-etablissements`} className={`relative ${etablissements.length > 1 ? 'before:w-6 before:h-4 before:border-s-1 before:absolute before:-top-3 before:left-0 before:border-slate-300' : ''}`}>
                            <CornerDownRightIcon strokeWidth={1.4} className="absolute  -left-[3px] top-0 w-5 h-5 text-slate-300" />
                            <span className='text-red-500 font-normal text-md ps-6 hover:underline'>{`${closedEtablissements.length} ${closedEtablissements.length > 1 ? 'établissements fermés' : 'établissement fermé'}`}</span>
                        </Link>
                    }
                </div>
            </ul >
        </div >
    )
}
