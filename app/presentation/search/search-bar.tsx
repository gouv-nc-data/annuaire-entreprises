import { Form, useSearchParams } from "@remix-run/react"
import { Search as SearchIcon } from "lucide-react"

import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { ExistingSearchParams } from "~/application/search/existing-search-params";

export default function SearchBar({ withoutOutline }: { withoutOutline?: boolean }) {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('terme') || '';

    return (
        <Form key={query} method="GET" action="/rechercher" className="w-full">
            <ExistingSearchParams exclude={["terme", "page"]} />
            <Input type="hidden" name="page" value="1" />
            <div className="flex w-full items-center space-x-2">
                <Input className={`bg-white ${withoutOutline ? 'outline-none focus-visible:outline-none focus-visible:ring-0' : ''}`} type="text" name="terme" placeholder="Nom, adresse, n° RID ou RIDET..." defaultValue={query ?? ''} />
                <Button><SearchIcon className="w-5 h-5" /></Button>
            </div>
        </Form>
    )
}
