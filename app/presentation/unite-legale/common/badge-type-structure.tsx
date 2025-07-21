import { Building, Building2, House, UserRound } from 'lucide-react'
import { TypeStructure } from '~/domain/entity/type-structure'

export const typeStructures = [
    {
        label: 'Tous',
        icon: <Building2 className={`w-4 h-4 text-blue-dinum`} />,
        clasnamesHover: 'hover:bg-blue-50',
        classnamesActive: 'bg-blue-100 text-blue-800 border-blue-200'
    },
    {
        label: 'Administration',
        icon: <Building className={`w-4 h-4 text-amber-500`} />,
        clasnamesHover: 'hover:bg-amber-50',
        classnamesActive: 'bg-amber-100 text-amber-800 border-amber-200'
    },
    {
        label: 'Association',
        icon: <House className={`w-4 h-4 text-purple-500`} />,
        clasnamesHover: 'hover:bg-purple-50',
        classnamesActive: 'bg-purple-100 text-purple-800 border-purple-200'
    },
    {
        label: 'Entreprise individuelle',
        icon: <UserRound className={`w-4 h-4 text-cyan-500`} />,
        clasnamesHover: 'hover:bg-cyan-50',
        classnamesActive: 'bg-cyan-100 text-cyan-800 border-cyan-200'
    }
]

export default function BadgeTypeStructure({ typeStructure }: { typeStructure: TypeStructure }) {
    return (
        <div className={`flex items-center gap-1 ${typeStructures.find(ts => ts.label === typeStructure)?.classnamesActive} flex gap-2 items-center rounded-lg p-1 px-2 font-light border-1 text-sm`}>
            {typeStructures.find(ts => ts.label === typeStructure)?.icon}
            <span className={`text-sm font-normal`}>{typeStructures.find(ts => ts.label === typeStructure)?.label}</span>
        </div>
    )
}
