import { Link } from '@remix-run/react'
import { IUniteLegale } from '~/domain/entity/unite-legale'

import UniteLegaleAnnoncesListHeader from './unite-legale-annonces-list-header'

// eslint-disable-next-line import/no-unresolved
import IseeLogo from '/isee-logo-white.png'
// eslint-disable-next-line import/no-unresolved
import InfogreffeLogo from '/infogreffe.svg'

import { Button } from '../../ui/button'
import { InfoIcon, Newspaper } from 'lucide-react'

import UniteLegaleIndicateurFinancier from './unite-legale-indicateur-financier'


export default function UniteLegaleIndicateursFinanciers({ uniteLegale }: { uniteLegale: IUniteLegale }) {

    return (
        <section className='flex flex-col gap-6 p-6 bg-white rounded-xl shadow-sm border border-input'>
            <header className='flex w-full justify-between items-start gap-6'>
                <h2 className='bg-blue-100 ring-2 ring-blue-200 border-1 shadow-md  text-blue-dinum  font-medium text-xl rounded-lg px-2 flex items-center gap-2'>Dépôts des comptes</h2>
                <div className='flex items-center gap-6'>
                    <Link to="https://www.infogreffe.nc/" target='_blank' rel="noreferrer">
                        <img src={InfogreffeLogo} className='w-20' alt={'Infogreffe logo'} />
                    </Link>
                    <Link to="https://www.isee.nc/" target='_blank' rel="noreferrer">
                        <img src={IseeLogo} className='w-20' alt={'ISEE logo'} />
                    </Link>
                </div>
            </header>
            {
                uniteLegale.indicateurs_financiers && uniteLegale.indicateurs_financiers.length > 0 ?
                    <div className='flex flex-col gap-6'>

                        <div className='flex flex-col'>
                            <span className='text-common'>Cette entreprise possède {uniteLegale.indicateurs_financiers.length} {uniteLegale.indicateurs_financiers.length > 1 ? 'dépôts de compte' : 'dépôt de compte'} enregisté au <strong className='font-medium'>Registre du commerce et des sociétés (RCS)</strong> tenu par l&apos;<a className='link neutral' href='' target='_blank'>INFOGREFFE</a></span>
                            <span className='text-common'>Pour en savoir plus, vous pouvez consulter la <a className='link neutral' href={`https://www.infogreffe.nc/entreprise/${uniteLegale.designation?.toLocaleLowerCase()}/${uniteLegale.rid}/`} target='_blank' rel="noreferrer">page de l&apos;entreprise</a> sur le site de l&apos;INFOGREFFE</span>
                        </div>
                        <div className='flex flex-col md:gap-0 gap-4'>
                            <div className='flex flex-col gap-6 w-full'>
                                <UniteLegaleAnnoncesListHeader />
                                <div className='flex flex-col gap-2 w-full'>
                                    {
                                        uniteLegale.indicateurs_financiers.sort((a, b) => new Date(b.datedepot as unknown as Date).getTime() - new Date(a.datedepot as unknown as Date).getTime()).map((indicateurFinancier, index) => <UniteLegaleIndicateurFinancier key={indicateurFinancier.numerodepot + '-' + index} uniteLegale={uniteLegale} indicateurFinancier={indicateurFinancier} />)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='flex flex-col gap-6'>
                        <div className='flex flex-col'>
                            <span className='text-common flex items-center gap-2'><Newspaper className='text-red-500' /> Aucune information concernant les dépots des comptes de cette entreprise n'est disponible</span>
                            <span className='text-common'>Pour en savoir plus, vous pouvez consulter la <a className='link neutral' href={`https://www.infogreffe.nc/entreprise/${uniteLegale.rid}/`} target='_blank'>page de l'entreprise</a> sur le site de l'INFOGREFFE</span>
                        </div>
                    </div>
            }
            <div className='flex flex-col md:flex-row items-start md:items-center justify-end gap-4'>
                <div className='flex items-center gap-4'>
                    <span className='text-xs font-light text-slate-500'>Mise à jour le 05/12/2024</span>
                    <Link to="https://www.infogreffe.nc/" target='_blank'>
                        <Button variant={"outline"}>
                            <InfoIcon className="w-3 h-3" />
                            Sources: INFOGREFFE
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
