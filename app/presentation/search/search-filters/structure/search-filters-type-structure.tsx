import { useNavigate, useSearchParams } from "@remix-run/react"
import { SearchParams } from "~/domain/entity/search-params"

import typeStructures, { TypeStructure } from "~/domain/entity/type-structure"

import { Building, Building2, UserRound, House } from "lucide-react"

const typeStructureIcons = {
    'Tous': <Building2 className={`w-4 h-4 text-blue-dinum`} />,
    'Administration': <Building className={`w-4 h-4 text-blue-dinum`} />,
    'Association': <House className={`w-4 h-4 text-blue-dinum`} />,
    'Entreprise individuelle': <UserRound className={`w-4 h-4 text-blue-dinum`} />
}

export default function SearchFiltersTypeStructure() {

    let [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const searchParamsFormatted = new SearchParams(searchParams)
    const searchParamsTypeStructure = searchParamsFormatted.typeStructure

    function handleOnClick(item: TypeStructure) {

        const newSearchParams = new URLSearchParams(searchParams.toString())

        let newTypeStructureSearchParams: TypeStructure | null = null

        if (item !== searchParamsTypeStructure) {
            newTypeStructureSearchParams = item
        }

        if (newTypeStructureSearchParams) {
            newSearchParams.set('type_structure', newTypeStructureSearchParams)
        } else {
            newSearchParams.delete('type_structure')
        }

        newSearchParams.set('page', "1")

        navigate(`/rechercher?${newSearchParams.toString()}`)
    }

    return (
        <div>
            <ul className="inline-flex flex-wrap gap-1 w-full">
                {
                    typeStructures.map((typeStructure) => (
                        <li key={typeStructure} className="">
                            <button onClick={() => handleOnClick(typeStructure)}
                                className={`flex gap-2 items-center rounded-lg p-2 px-3 font-light border-1 text-sm ${searchParamsTypeStructure === typeStructure ? 'bg-blue-100 border-blue-200 border-1 text-blue-dinum font-normal' : 'hover:bg-blue-50 hover:text-blue-dinum'}`}
                            >
                                {
                                    typeStructureIcons[typeStructure]
                                }
                                <span>{typeStructure}</span>
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
