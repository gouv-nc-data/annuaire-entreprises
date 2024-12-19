import { useFetcher, useNavigate, useSearchParams } from "@remix-run/react";
import { SearchIcon } from "lucide-react";
import { Input } from "~/presentation/ui/input";
import { ExistingSearchParams } from "~/application/search/existing-search-params";
import { Button } from "~/presentation/ui/button";
import { useEffect, useState } from "react";
import { SearchResults } from "~/domain/entity/search-results";
import { getSearchResultsLoader } from "~/application/search/get-search-results";
import { SearchParams } from "~/domain/entity/search-params";

export default function SearchModalForm({
    setIsOpen,
    handleChangeCurrentHistoryItem,
    handleChangeSearchResults,
    handleChangeSearchValue
}: {
    setIsOpen: (bool: boolean) => void,
    handleChangeCurrentHistoryItem: (action: 'prev' | 'next') => void,
    handleChangeSearchResults: (searchResults: SearchResults) => void,
    handleChangeSearchValue: (searchValue: string) => void
}) {

    const navigate = useNavigate();
    let [searchParams] = useSearchParams();
    let query = searchParams.get('terme') || '';

    const [value, setValue] = useState(query ?? '')

    let search = useFetcher<typeof getSearchResultsLoader>()

    useEffect(() => {
        if (search && search.data) {
            handleChangeSearchResults(search.data)
        }
    }, [search])

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
        handleChangeSearchValue(e.currentTarget.value)
        if (e.currentTarget.value.length > 2) {
            search.submit(e.currentTarget.form)
        }
    }

    const handleFormSubmit = () => {

        setIsOpen(false)
        const newSearchParams = new SearchParams(searchParams)

        newSearchParams.q = value
        newSearchParams.buildUrl();

        navigate(`/rechercher?${newSearchParams.url}`)
    }

    return (
        <search.Form method="GET" action="/rechercher" className="w-full py-2 border-b-[1px] border-zinc-300 ring-6 ring-blue-50">
            <ExistingSearchParams exclude={["terme", "page", "per_page"]} />
            <div className="flex w-full items-center relative">
                <SearchIcon className="w-5 h-5 text-blue-dinum absolute left-4" />
                <Input type="hidden" name={"per_page"} value={5} />
                <Input
                    value={value}
                    onChange={handleChange}
                    className="!ps-12 shadow-none border-0 p-4 py-6 focus-visible:outline-none focus-visible:ring-0 outline-none ring-0"
                    type="text"
                    name="terme"
                    placeholder="Nom, adresse, n° RID..." />
                <Button className="absolute right-4" onClick={handleFormSubmit}><SearchIcon className="w-5 h-5" /></Button>
            </div>
        </search.Form>
    )
}
