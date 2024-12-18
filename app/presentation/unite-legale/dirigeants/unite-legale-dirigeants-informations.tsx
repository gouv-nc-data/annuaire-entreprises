import { Link } from '@remix-run/react'
import { IUniteLegale } from '~/domain/entity/unite-legale'

import UniteLegaleDirigeantsInformationsListHeader from './unite-legale-dirigeants-informations-list-header'

import IseeLogo from '/isee-logo-white.png'
import { Button } from '../../ui/button'
import { InfoIcon } from 'lucide-react'

import { fakeDirigeants } from '~/domain/entity/dirigeant'
import UniteLegaleDirigeant from './unite-legale-dirigeant'


export default function UniteLegaleDirigeantsInformations({ uniteLegale }: { uniteLegale: IUniteLegale }) {
    return (
        <section className='flex flex-col gap-6 p-6 bg-white rounded-xl shadow-sm border border-input'>
            <header className='flex w-full justify-between items-start gap-6'>
                <h2 className='bg-blue-100 ring-2 ring-blue-200 border-1 shadow-md  text-blue-dinum  font-medium text-xl rounded-lg px-2'>Dirigeant(s)</h2>
                <Link to="https://www.isee.nc/" target='_blank'>
                    <img src={IseeLogo} className='w-20' />
                </Link>
            </header>
            <div className='flex flex-col'>
                <span className='text-zinc-900 font-light text-md'>Cette entreprise possède {fakeDirigeants.length} {fakeDirigeants.length > 1 ? 'dirigeants' : 'dirigeant'}  enregisté au <strong className='font-medium'>Registre du commerce et des sociétés (RCS)</strong> tenu par l'<a className='underline' href='' target='_blank'>INFOGREFFE</a></span>
                <span className='text-zinc-900 font-light text-md'>Pour en savoir plus, vous pouvez consulter la <a className='underline' href={`https://www.infogreffe.nc/entreprise/digit/${uniteLegale.rid}/`} target='_blank'>page de l'entreprise</a> sur le site de l'INFOGREFFE</span>
            </div>
            <div className='flex flex-col md:gap-0 gap-4'>
                <div className='flex flex-col gap-6 w-full'>
                    <UniteLegaleDirigeantsInformationsListHeader />
                    <div className='flex flex-col gap-2 w-full'>
                        {
                            fakeDirigeants.map(dirigeant => <UniteLegaleDirigeant key={dirigeant.nom} dirigeant={dirigeant} />)
                        }
                    </div>
                </div>
            </div>

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
