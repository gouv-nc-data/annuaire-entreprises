import { IUniteLegale } from '~/domain/entity/unite-legale'

import IseeLogo from '/isee-logo-white.png'

export default function UniteLegaleInformations({ uniteLegale }: { uniteLegale: IUniteLegale }) {
    return (
        <section className='flex flex-col p-6 bg-white rounded-xl shadow-sm border border-input'>
            <header className='flex w-full justify-between items-start gap-6'>
                <h2 className='bg-slate-100 py-1 px-2 text-slate-700 border-1 font-medium rounded-lg text-lg'>Informations légales de {uniteLegale.nom_complet}</h2>
                <img src={IseeLogo} className='w-20' />
            </header>
        </section>
    )
}
