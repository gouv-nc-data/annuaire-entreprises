import { CircleHelp, Ban } from "lucide-react"
import { isNonDiffusableInformation } from "~/utils/isNonDiffusableInformation"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function BasicInformation({ information, uppercase, isSmall, isBold, isBlue, extraClass }: { information: string | any, uppercase?: boolean, isSmall?: boolean, isBold?: boolean, isBlue?: boolean, extraClass?: string }) {

    let toHide = false

    if (typeof information === 'string') {
        toHide = isNonDiffusableInformation(information)
    }

    return (
        toHide ?
            <span className={`${isSmall ? 'text-xs' : 'text-sm'} shrink-0 inline-flex rounded-full items-center gap-2 bg-slate-200 overflow-hidden pe-3 font-medium text-slate-800`}>
                <strong className='bg-slate-300 ps-3 px-2 py-1'><Ban className='w-4 h-4 text-orange-500' /></strong>
                Champ non diffusable
            </span>
            : information
                ? <span className={`${isBlue ? 'text-blue-dinum' : 'text-slate-800'} inline text-base ${isBold ? 'font-medium' : 'font-normal'} ${isSmall ? 'text-sm' : 'text-base'} ${uppercase ? 'uppercase' : ''} ${extraClass ? extraClass : ''}`}>{information}</span>
                : <span className={`${isSmall ? 'text-xs' : 'text-sm'} inline-flex rounded-full items-center gap-2 bg-slate-200 overflow-hidden pe-3 font-medium text-slate-800`}>
                    <strong className='bg-slate-300 ps-3 px-2 py-1'><CircleHelp className='w-4 h-4 text-blue-dinum' /></strong>
                    Champ non renseigné
                </span>
    )
}
