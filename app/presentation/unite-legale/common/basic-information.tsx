import { CircleHelp } from "lucide-react"

export default function BasicInformation({ information, uppercase, isSmall, isBold }: { information: string | any, uppercase?: boolean, isSmall?: boolean, isBold?: boolean }) {
    return (
        information
            ? <span className={`text-slate-800 text-base ${isBold ? 'font-medium' : 'font-normal'} ${isSmall ? 'text-sm' : 'text-base'} ${uppercase ? 'uppercase' : ''}`}>{information}</span>
            : <span className={`${isSmall ? 'text-xs' : 'text-sm'} inline-flex rounded-full items-center gap-2 bg-slate-200 overflow-hidden pe-3 font-medium text-slate-800`}>
                <figure className='bg-slate-300 ps-3 px-2 py-1'><CircleHelp className='w-4 h-4 text-blue-dinum' /></figure>
                Champ non renseigné
            </span>
    )
}
