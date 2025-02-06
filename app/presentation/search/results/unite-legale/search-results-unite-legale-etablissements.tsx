import { Link, useSearchParams } from "@remix-run/react"
import { IEtablissement } from '~/domain/entity/etablissement'
import { CornerDownRightIcon } from "lucide-react"
import { IUniteLegale } from "~/domain/entity/unite-legale"
import BasicInformation from "~/presentation/unite-legale/common/basic-information"
import { removeAccents } from "~/utils/remove_accents";
import { isNonDiffusableInformation } from "~/utils/isNonDiffusableInformation";
import HighlightFoundedTerm from "~/presentation/ui/highlight-founded-terme";

export default function SearchResultsUniteLegaleEtablissements({ etablissements, rid, uniteLegale }: { etablissements: IEtablissement[], rid: IUniteLegale['rid'], uniteLegale: IUniteLegale }) {

    const [searchParams] = useSearchParams();
    const terme = searchParams.get('terme')

    const openedEtablissements = []
    const closedEtablissements = []
    const foundEtablissementsByQueryTerme = [] as IEtablissement[]

    for (const etablissement of etablissements) {
        etablissement.situation?.toLowerCase().includes('radié')
            ? closedEtablissements.push(etablissement)
            : openedEtablissements.push(etablissement)
    }


    if (terme) {
        openedEtablissements.forEach(etablissement => {
            if (etablissement.nom_complet && removeAccents(etablissement.nom_complet.toLowerCase()).includes(removeAccents(terme.toLowerCase()))) {
                foundEtablissementsByQueryTerme.push(etablissement)
            } else if (etablissement.adresse_physique && removeAccents(etablissement.adresse_physique.toLowerCase()).includes(removeAccents(terme.toLocaleLowerCase()))) {
                foundEtablissementsByQueryTerme.push(etablissement)
            }
        })
        closedEtablissements.forEach(etablissement => {
            if (etablissement.nom_complet && removeAccents(etablissement.nom_complet.toLowerCase()).includes(removeAccents(terme.toLowerCase()))) {
                foundEtablissementsByQueryTerme.push(etablissement)
            } else if (etablissement.adresse_physique && removeAccents(etablissement.adresse_physique.toLowerCase()).includes(removeAccents(terme.toLocaleLowerCase()))) {
                foundEtablissementsByQueryTerme.push(etablissement)
            }
        })
    }

    return (
        <div>
            <ul className='flex flex-col'>
                {
                    foundEtablissementsByQueryTerme && foundEtablissementsByQueryTerme.length > 0
                        ?
                        foundEtablissementsByQueryTerme.slice(0, 3).map((etablissement, index) => {
                            if (uniteLegale.adresse_physique && etablissement.adresse_physique == uniteLegale.adresse_physique.substring(0, uniteLegale.adresse_physique.length - 1)) {
                                return null
                            } else {
                                return (<div key={index} className="relative border-s-1 border-slate-300">
                                    <figure className="absolute left-0 top-3 w-3 h-[1px] bg-slate-300" />
                                    <Link to={`/etablissement/${etablissement.ridet}`} className="group block relative ps-6 hover:underline gap-1">
                                        {etablissement.nom_complet && <div className='address font-normal inline'><BasicInformation extraClass="!text-sm !text-orange-600 !font-medium !uppercase !tracking-wide" isSmall information={<HighlightFoundedTerm value={etablissement.nom_complet + ' ·'} terms={terme} />} /></div>}
                                        <span className='address inline ps-1'><BasicInformation extraClass="!text-sm !font-light !text-primary-300 !uppercase !tracking-wide" isSmall information={etablissement.adresse_complete} /></span>
                                    </Link>
                                </div>)
                            }
                        })
                        : openedEtablissements.slice(0, 3).map((etablissement, index) => {
                            if (uniteLegale.adresse_physique && etablissement.adresse_physique == uniteLegale.adresse_physique.substring(0, uniteLegale.adresse_physique.length - 1)) {
                                return null
                            } else {
                                <li key={index} className="relative border-s-1 border-slate-300">
                                    <figure className="absolute left-0 top-3 w-3 h-[1px] bg-slate-300" />
                                    <Link to={`/etablissement/${etablissement.ridet}`} className="block ps-6 hover:underline gap-1">
                                        {etablissement.nom_complet && <span className='address'><BasicInformation extraClass="!text-sm !font-light !text-primary-300 !uppercase !tracking-wide" isSmall information={etablissement.nom_complet} /></span>}
                                        {
                                            isNonDiffusableInformation(etablissement.adresse_complete as string)
                                                ? <span className='address'><BasicInformation extraClass="!text-sm !font-light !text-primary-300 !uppercase !tracking-wide" isSmall information={etablissement.ville_physique} /></span>
                                                : <span className='address ps-1'><BasicInformation extraClass="!text-sm !font-light !text-primary-300 !uppercase !tracking-wide" isSmall information={etablissement.adresse_complete} /></span>
                                        }
                                    </Link>
                                </li>
                            }
                        })
                }
                <div className="flex flex-col">
                    {openedEtablissements.length > 0 ?
                        <Link to={`/entreprise/${rid}#opened-etablissements`} className={`relative ${openedEtablissements.length > 1 ? 'before:w-6 before:h-4 before:border-s-1 before:absolute before:-top-3 before:left-0 before:border-slate-300' : ''}`}>
                            <CornerDownRightIcon strokeWidth={1.4} className="absolute -left-[3px] top-0 w-5 h-5 text-slate-300" />
                            <span className='text-blue-dinum font-normal text-md ps-6 hover:underline'>{`${openedEtablissements.length} ${openedEtablissements.length > 1 ? 'établissements' : 'établissement'} en activité`}</span>
                        </Link>
                        :
                        <Link to={`/entreprise/${rid}#closed-etablissements`} className={`relative`}>
                            <CornerDownRightIcon strokeWidth={1.4} className="absolute -left-[3px] top-0 w-5 h-5 text-slate-300" />
                            <span className='text-blue-dinum font-normal text-md ps-6 hover:underline'>{`aucun établissement en activité`}</span>
                        </Link>
                    }
                </div>

            </ul >
        </div >
    )
}
