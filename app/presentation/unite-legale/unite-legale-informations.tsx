import { Link } from '@remix-run/react'

import { IUniteLegale } from '~/domain/entity/unite-legale'
import SituationStatus from './common/situation-status'
import BasicInformation from './common/basic-information'

// eslint-disable-next-line import/no-unresolved
import IseeLogo from '/isee-logo-white.png'
import TooltipInfo from '../ui/tooltip-info'
import { Button } from '../ui/button'
import { InfoIcon } from 'lucide-react'
import UniteLegaleShareButton from './unite-legale-share-button'
import { formatCommonDate } from '~/utils/format-date'

export default function UniteLegaleInformations({ uniteLegale }: { uniteLegale: IUniteLegale }) {

    console.log('situation : ', uniteLegale)
    return (
        <section className='flex flex-col gap-6 p-6 bg-white rounded-xl shadow-sm border border-input'>
            <header className='flex w-full justify-between items-start gap-6'>
                <h2 className='bg-blue-100 ring-2 ring-blue-200 border-1 shadow-md  text-blue-dinum  font-medium text-xl rounded-lg px-2'>Informations légales de {uniteLegale.nom_complet}</h2>
                <Link to="https://www.isee.nc/" target='_blank' rel="noreferrer">
                    <img src={IseeLogo} className='w-20' alt='Logo ISEE' />
                </Link>
            </header>
            <div className='flex flex-col md:gap-0 gap-4'>
                <div className='flex md:flex-row flex-col w-full md:gap-10 md:pb-0 pb-6'>
                    <div className='flex justify-start w-full md:w-1/3 md:border-e-2 md:bg-blue-50 md:px-6 md:pb-10 pt-4 md:rounded-xl md:rounded-b-none md:rounded-e-none'>
                        <TooltipInfo label='État des inscriptions ' content='Toutes les structures référencées sur notre site sont inscrites à un ou plusieurs référentiels publics (base Sirene, RNE, RNA).' />
                    </div>
                    <div className='flex justify-start w-full md:w-2/3 md:pb-10 pt-4'>
                        <SituationStatus situation={uniteLegale.situation_entreprise} />
                    </div>
                </div>
                <div className='flex md:flex-row flex-col w-full md:gap-10'>
                    <div className='md:w-1/3 md:border-e-2 md:bg-blue-50 md:px-6 md:py-[6px]'>
                        <span className='text-base font-medium text-primary'>Dénomination</span>
                    </div>
                    <div className='w-full md:w-2/3 md:py-[6px]'>
                        <BasicInformation information={uniteLegale.nom_complet} />
                    </div>
                </div>
                <div className='flex md:flex-row flex-col w-full md:gap-10'>
                    <div className='md:w-1/3 md:border-e-2 md:bg-blue-50 md:px-6 md:py-[6px]'>
                        <span className='text-base font-medium text-primary'>RID</span>
                    </div>
                    <div className='w-full md:w-2/3 md:py-[6px]'>
                        <BasicInformation information={uniteLegale.rid} />
                    </div>
                </div>
                <div className='flex md:flex-row flex-col w-full md:gap-10'>
                    <div className='md:w-1/3 md:border-e-2 md:bg-blue-50 md:px-6 md:py-[6px]'>
                        <span className='text-base font-medium text-primary'>Activité principale (NAF/APE)</span>
                    </div>
                    <div className='w-full md:w-2/3 md:py-[6px]'>
                        <BasicInformation information={uniteLegale.ape} />
                    </div>
                </div >
                <div className='flex md:flex-row flex-col w-full md:gap-10'>
                    <div className='md:w-1/3 md:border-e-2 md:bg-blue-50 md:px-6 md:py-[6px]'>
                        <span className='text-base font-medium text-primary'>Code NAF/APE</span>
                    </div>
                    <div className='w-full md:w-2/3 md:py-[6px]'>
                        <BasicInformation information={uniteLegale.code_ape !== '.' ? uniteLegale.code_ape : null} />
                    </div>
                </div>
                <div className='flex md:flex-row flex-col w-full md:gap-10'>
                    <div className='md:w-1/3 md:border-e-2 md:bg-blue-50 md:px-6 md:py-[6px]'>
                        <span className='text-base font-medium text-primary'>Adresse postale</span>
                    </div>
                    <div className='w-full md:w-2/3 md:py-[6px]'>
                        <BasicInformation information={uniteLegale.adresse_complete} uppercase />
                    </div>
                </div>
                <div className='flex md:flex-row flex-col w-full md:gap-10'>
                    <div className='md:w-1/3 md:border-e-2 md:bg-blue-50 md:px-6 md:py-[6px]'>
                        <span className='text-base font-medium text-primary'>Forme juridique</span>
                    </div>
                    <div className='w-full md:w-2/3 md:py-[6px]'>
                        <BasicInformation information={uniteLegale.forme_juridique} />
                    </div>
                </div>
                <div className='flex md:flex-row flex-col w-full md:gap-10'>
                    <div className='md:w-1/3 md:border-e-2 md:bg-blue-50 md:px-6 md:py-[6px]'>
                        <span className='text-base font-medium text-primary'>Date de création</span>
                    </div>
                    <div className='w-full md:w-2/3 md:py-[6px] pb-6'>
                        <BasicInformation information={formatCommonDate(uniteLegale.date_creation as string)} />
                    </div>
                </div>
                <div className='flex md:flex-row flex-col w-full md:gap-10'>
                    <div className='md:w-1/3 md:border-e-2 md:bg-blue-50 md:px-6 md:py-[6px]'>
                        <span className='text-base font-medium text-primary'>Date de début d&apos;activité</span>
                    </div>
                    <div className='w-full md:w-2/3 md:py-[6px] pb-6'>
                        <BasicInformation information={null} />
                    </div>
                </div>
                <div className='flex md:flex-row flex-col w-full md:gap-10'>
                    <div className='md:w-1/3 md:border-e-2 md:bg-blue-50 md:px-6 md:py-[6px]'>
                        <span className='text-base font-medium text-primary'>Date de fin d&apos;activité</span>
                    </div>
                    <div className='w-full md:w-2/3 md:py-[6px] pb-6'>
                        <BasicInformation information={null} />
                    </div>
                </div>
                <div className='flex md:flex-row flex-col w-full md:gap-10'>
                    <div className='md:w-1/3 md:border-e-2 md:bg-blue-50 md:px-6 md:py-[6px] md:pb-6 rounded-xl rounded-t-none rounded-e-none'>
                        <span className='text-base font-medium text-primary'>Date de radiation</span>
                    </div>
                    <div className='w-full md:w-2/3 md:py-[6px] pb-6'>
                        <BasicInformation information={null} />
                    </div>
                </div>
            </div>

            <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-4'>
                <UniteLegaleShareButton rid={uniteLegale.rid} align='start' />
                <div className='flex items-center gap-4'>
                    <span className='text-xs font-light text-slate-500'>Mise à jour le 05/12/2024</span>
                    <Link to="https://www.isee.nc/" target='_blank' rel="noreferrer">
                        <Button variant={"outline"}>
                            <InfoIcon className="w-3 h-3" />
                            Sources: ISEE
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
