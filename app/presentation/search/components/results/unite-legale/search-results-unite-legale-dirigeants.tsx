import { User } from 'lucide-react'
import { IDirigeant } from '~/domain/entity/dirigeant'

export default function SearchResultsUniteLegaleDirigeants({ dirigeants }: { dirigeants: IDirigeant[] }) {

    console.log('dirigeants : ', dirigeants)

    return (
        <div className='text-slate-600 flex items-center gap-2'>
            <User className="w-5 h-5" />
            <ul className='flex items-center gap-2'>
                {
                    dirigeants.map(dirigeant =>
                        <li key={dirigeant.nom} className=''>
                            <span className='text-sm font-normal text-slate-600'>{dirigeant.nom}</span>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}
