import { Building2 } from 'lucide-react'

export default function UniteLegaleCategory({ category }: { category: string }) {
    return (
        <div className="tag flex ring-2 ring-orange-300 px-2 py-1">
            <Building2 className="w-4 h-4 text-orange-400" />
            <span className="font-medium text-md text-primary tracking-wide">Entreprise</span>
        </div>
    )
}
