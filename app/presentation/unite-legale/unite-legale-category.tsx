import { Building2, Building } from 'lucide-react'

export default function UniteLegaleCategory({ category, isBig }: { category: string, isBig?: boolean }) {
    return (
        <div className="tag flex ring-2 ring-orange-300 px-2 py-1">
            <Building2 className={`${isBig ? 'w-6 h-6' : 'w-4 h-4'} text-orange-400`} />
            <span className={`${isBig ? 'text-xl' : 'text-md'} font-medium text-primary tracking-wide`}>{category}</span>
        </div>
    )
}
