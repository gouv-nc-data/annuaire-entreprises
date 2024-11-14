import { Building2 } from 'lucide-react'

export default function UniteLegalCategory({ category }: { category: string }) {
    return (
        <div className="tag bg-slate-200 hidden sm:flex">
            <Building2 className="w-6 h-6 bg-blue-300 p-1 text-primary fill-slate-300" />
            <span className="font-normal pe-2 text-slate-700">Entreprise</span>
        </div>
    )
}
