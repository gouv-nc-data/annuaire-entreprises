import { Form, useSearchParams } from "@remix-run/react"
import { Search as SearchIcon } from "lucide-react"

import { Input } from "../../ui/input"
import { Button } from "../../ui/button"

export default function SearchBar() {
    let [searchParams] = useSearchParams();
    let query = searchParams.get('terme') || '';

    return (
        <Form method="GET" action="/rechercher">
            <div className="flex w-full max-w-sm items-center space-x-2">
                <Input type="text" name="terme" placeholder="Nom, adresse, n° RIDET..." defaultValue={query ?? ''} />
                <Button><SearchIcon className="w-5 h-5" /></Button>
            </div>
        </Form>
    )
}
