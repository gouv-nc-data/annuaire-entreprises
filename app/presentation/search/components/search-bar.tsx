import { Form, useSearchParams } from "@remix-run/react"
import { Search as SearchIcon } from "lucide-react"

import { Input } from "../../ui/input"
import { Button } from "../../ui/button"
import { ExistingSearchParams } from "~/application/search/existing-search-params";

export default function SearchBar({ withoutOutline }: { withoutOutline?: boolean }) {
    let [searchParams] = useSearchParams();
    let query = searchParams.get('terme') || '';

    return (
        <Form method="GET" action="/rechercher" className="w-full">
            <ExistingSearchParams exclude={["terme", "page"]} />
            <div className="flex w-full items-center space-x-2">
                <Input className={`bg-white ${withoutOutline ? 'outline-none focus-visible:outline-none focus-visible:ring-0' : ''}`} type="text" name="terme" placeholder="Nom, adresse, n° RIDET..." defaultValue={query ?? ''} />
                <Button><SearchIcon className="w-5 h-5" /></Button>
            </div>
        </Form>
    )
}
