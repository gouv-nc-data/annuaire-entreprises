import { User } from 'lucide-react'
import { IDirigeant } from '~/domain/entity/dirigeant'
import { IUniteLegale } from '~/domain/entity/unite-legale'

export default function SearchResultsUniteLegaleDirigeants({ dirigeants }: { dirigeants: IDirigeant[] }) {
    return (
        <div className='text-slate-600 flex items-center'>
            <User className="w-5 h-5" />
            <ul className='flex items-center divide-x-1 divide-slate-300'>
                {
                    dirigeants.slice(0, 3).map((dirigeant) =>
                        <li key={Math.random()}
                         className='inline px-2 first:ps-1'>
                            <span className='text-sm font-light text-slate-800'>{dirigeant.nom_complet ? dirigeant.nom_complet : dirigeant.nom_personne_morale}</span>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}
