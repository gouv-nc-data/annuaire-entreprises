import { IUniteLegale } from '~/domain/entity/unite-legale'
import { CheckCircle2, XCircle } from 'lucide-react'

export default function SituationStatus({ situation }: { situation: IUniteLegale['situation_entreprise'] }) {
    return (

        situation ?
            situation.toLowerCase().includes('radiée')
                ? <span className='inline-flex rounded-full items-center gap-2 bg-slate-200 overflow-hidden pe-3 font-medium text-slate-800'>
                    <figure className='bg-slate-300 ps-3 px-2 py-2'><XCircle className='w-5 h-5 text-red-600' /></figure>
                    {situation}
                </span>
                : <span className='inline-flex rounded-full items-center gap-2 bg-slate-200 overflow-hidden pe-3 font-medium text-slate-800'>
                    <figure className='bg-slate-300 ps-3 px-2 py-2'><CheckCircle2 className='w-5 h-5 text-green-600' /></figure>
                    {situation}
                </span>
            : <></>
    )
}
