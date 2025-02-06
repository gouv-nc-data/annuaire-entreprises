import { Info } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'

export default function TooltipInfo({ label, content, isEtablissement }: { label: string, content: string, isEtablissement?: boolean }) {
    return (
        <TooltipProvider delayDuration={0}>
            <Tooltip>
                <TooltipTrigger className={`flex items-center gap-2 border-b-2  border-dashed ${isEtablissement ? 'border-orange-dinum' : 'border-blue-dinum'}`}>
                    <span className='text-base font-medium text-primary whitespace-nowrap'>{label}</span>
                    <Info className='w-5 h-5 text-white fill-blue-dinum' />
                </TooltipTrigger>
                <TooltipContent className='max-w-xs' align='start'>
                    <p>{content}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}
