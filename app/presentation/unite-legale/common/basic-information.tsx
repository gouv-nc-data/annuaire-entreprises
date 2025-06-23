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
            <span className={`${isSmall ? 'text-xs' : 'text-sm'} shrink-0 overflow-hidden font-light text-slate-500`}>
                Champ non diffusable
            </span>
            : information
                ? <span className={`${isBlue ? 'text-blue-dinum' : 'text-slate-700'} inline text-base ${isBold ? 'font-medium' : 'font-normal'} ${isSmall ? 'text-sm' : 'text-base'} ${uppercase ? 'uppercase' : ''} ${extraClass ? extraClass : ''}`}>{information}</span>
                : <span className={`${isSmall ? 'text-xs' : 'text-sm'} text-slate-500 overflow-hidden font-light`}>
                    Champ non renseigné
                </span>
    )
}
