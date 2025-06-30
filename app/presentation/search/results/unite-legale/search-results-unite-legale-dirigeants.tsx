import { useSearchParams } from '@remix-run/react';
import { UserRound } from 'lucide-react'
import { IDirigeant } from '~/domain/entity/dirigeant'
import HighlightFoundedTerm from '~/presentation/ui/highlight-founded-terme'

export default function SearchResultsUniteLegaleDirigeants({ dirigeants }: { dirigeants: IDirigeant[] }) {

    const [searchParams] = useSearchParams();
    const terme = searchParams.get('terme')
    const dirigeantQuery = searchParams.get('dirigeant')

    return (
        <div className='text-slate-600 flex items-start sm:items-center'>
            <UserRound strokeWidth={1.6} className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-slate-700 me-2" />
            <ul className='flex flex-col md:flex-row md:items-center sm:divide-x-1 divide-slate-300'>
                {
                    dirigeants.slice(0, 3).map((dirigeant) =>
                        <li key={Math.random()}
                            className='inline px-1 sm:px-2 sm:first:ps-0 !font-normal text-sm text-slate-700'>
                            {(dirigeant.nom_complet || dirigeant.nom_personne_morale) && <HighlightFoundedTerm value={dirigeant.nom_complet?.toUpperCase() !== 'NULL NULL' ? dirigeant.nom_complet as string : dirigeant.nom_personne_morale as string} terms={dirigeantQuery ? dirigeantQuery : terme} />}
                        </li>
                    )
                }
            </ul>
        </div>
    )
}
