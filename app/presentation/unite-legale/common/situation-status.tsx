import { IUniteLegale } from '~/domain/entity/unite-legale'
import { CheckCircle2, XCircle } from 'lucide-react'

export default function SituationStatus({ situation, isSmall }: { situation: IUniteLegale['situation_entreprise'], isSmall?: boolean }) {
    return (

        situation ?
            situation.toLowerCase().includes('radiée') || situation.toLowerCase().includes('radié')
                ? <span className={`${isSmall ? 'text-xs' : 'text-base'} inline-flex rounded-full items-center gap-2 bg-slate-200 overflow-hidden pe-3 font-medium text-slate-800`}>
                    <figure className={`${isSmall ? 'px-2 py-1' : 'px-2 py-2'} bg-slate-300 ps-3`}><XCircle className={`${isSmall ? 'w-4 h-4' : 'w-5 h-5'}  text-red-600`} /></figure>
                    {situation}
                </span>
                : <span className={`${isSmall ? 'text-xs' : 'text-base'} inline-flex rounded-full items-center gap-2 bg-slate-200 overflow-hidden pe-3 font-medium text-slate-800`}>
                    <figure className={`${isSmall ? 'px-2 py-1' : 'px-2 py-2'} bg-slate-300 ps-3`}><CheckCircle2 className={`${isSmall ? 'w-4 h-4' : 'w-5 h-5'}  text-green-600`} /></figure>
                    {situation}
                </span>
            : <></>
    )
}
