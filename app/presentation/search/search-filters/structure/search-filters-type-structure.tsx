import { useNavigate, useSearchParams } from "@remix-run/react"
import { SearchParams } from "~/domain/entity/search-params"
import { TypeStructure } from "~/domain/entity/type-structure"
import { typeStructures } from "~/presentation/unite-legale/common/badge-type-structure"

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

        if (newTypeStructureSearchParams && newTypeStructureSearchParams !== 'Tous') {
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
                        <li key={typeStructure.label} className="">
                            <button onClick={() => handleOnClick(typeStructure.label as TypeStructure)}
                                className={`flex gap-2 items-center rounded-lg p-1 px-2 font-light border-1 text-sm ${searchParamsTypeStructure === typeStructure.label ? `border-1 ${typeStructure.classnamesActive} font-normal` : `${typeStructure.clasnamesHover}`}`}
                            >
                                {typeStructure.icon}
                                <span>{typeStructure.label}</span>
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
