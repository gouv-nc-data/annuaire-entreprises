import { Link } from '@remix-run/react'
import { IUniteLegale } from '~/domain/entity/unite-legale'

import UniteLegaleDirigeantsListHeader from './unite-legale-dirigeants-list-header'

// eslint-disable-next-line import/no-unresolved
import IseeLogo from '/isee-logo-white.png'
// eslint-disable-next-line import/no-unresolved
import InfogreffeLogo from '/infogreffe.svg'
import { Button } from '../../ui/button'
import { InfoIcon, Users } from 'lucide-react'

import UniteLegaleDirigeant from './unite-legale-dirigeant'


export default function UniteLegaleDirigeants({ uniteLegale }: { uniteLegale: IUniteLegale }) {

    return (
        <section className='flex flex-col gap-6 p-6 bg-white rounded-xl shadow-sm border border-input'>
            <header className='flex w-full justify-between items-start gap-6'>
                <h2 className='text-blue-dinum font-normal text-xl'>Dirigeant(s)</h2>
            </header>
            {
                uniteLegale.dirigeants && uniteLegale.dirigeants.length > 0 ?
                    <div className='flex flex-col gap-6'>
                        <div className='flex flex-col'>
                            <span className='text-common'>Cette entreprise possède {uniteLegale.dirigeants.length} {uniteLegale.dirigeants.length > 1 ? 'dirigeants enregistrés' : 'dirigeant enregistré'} au <strong className='font-medium'>Registre du commerce et des sociétés (RCS).</strong></span>
                            <span className='text-common'>Pour en savoir plus, vous pouvez consulter la <a className='link neutral' href={`https://www.infogreffe.nc/entreprise/${uniteLegale.rid}/`} target='_blank' rel="noreferrer">page de l&apos;entreprise</a> sur le site infogreffe.nc</span>
                        </div>
                        <div className='flex flex-col md:gap-0 gap-4'>
                            <div className='flex flex-col gap-6 w-full'>
                                <UniteLegaleDirigeantsListHeader />
                                <div className='flex flex-col gap-2 w-full'>
                                    {
                                        uniteLegale.dirigeants.sort((a, b) => a.ordreaffichage - b.ordreaffichage).map((dirigeant, index) => <UniteLegaleDirigeant key={index} dirigeant={dirigeant} />)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='flex flex-col gap-6'>
                        <div className='flex flex-col'>
                            <span className='text-common flex items-center gap-2'><Users className='text-red-500' /> Aucune information concernant les dirigeants de cette entreprise n&apos;est disponible</span>
                            <span className='text-common'>Pour en savoir plus, vous pouvez consulter la <a className='link neutral' href={`https://www.infogreffe.nc/entreprise/${uniteLegale.rid}/`} target='_blank' rel="noreferrer">page de l&apos;entreprise</a> sur le site de l&apos;INFOGREFFE</span>
                        </div>
                    </div>
            }

            <div className='flex flex-col md:flex-row items-start md:items-center justify-start gap-4 pt-4'>
                <div className='flex items-center gap-4'>
                    <span className='text-xs font-light text-slate-500'>Mise à jour le 05/12/2024</span>
                    <Link to="https://www.infogreffe.nc/" target='_blank' rel="noreferrer">
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
