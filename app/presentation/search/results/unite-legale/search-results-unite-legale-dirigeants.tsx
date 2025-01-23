import { User } from 'lucide-react'
import { IDirigeant } from '~/domain/entity/dirigeant'
import { IUniteLegale } from '~/domain/entity/unite-legale'

export default function SearchResultsUniteLegaleDirigeants({ dirigeants }: { dirigeants: IDirigeant[] }) {
    return (
        <div className='text-slate-600 flex items-start sm:items-center'>
            <User className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 ps:pt-0 mt-1" />
            <ul className='flex flex-col md:flex-row items-center sm:divide-x-1 divide-slate-300'>
                {
                    dirigeants.slice(0, 3).map((dirigeant) =>
                        <li key={Math.random()}
                         className='inline px-1 sm:px-2 sm:first:ps-1'>
                            <span className='text-sm font-light text-slate-800'>{dirigeant.nom_complet ? dirigeant.nom_complet : dirigeant.nom_personne_morale}</span>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}
