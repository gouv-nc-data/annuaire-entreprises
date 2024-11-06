import { Form, useSearchParams } from "@remix-run/react"
import { Search as SearchIcon, ArrowUp, ArrowDown } from "lucide-react"

import { Input } from "../../ui/input"
import { Button } from "../../ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogTitle,
} from "../../ui/dialog"
import SearchBar from "./search-bar"
import { useState } from "react"
import { ExistingSearchParams } from "~/application/search/existing-search-params"

export default function SearchModal() {
    let [searchParams] = useSearchParams();
    let query = searchParams.get('terme') || '';

    const [isOpen, setIsOpen] = useState(false)

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <div className="w-full" onClick={() => setIsOpen(true)}>
                <SearchBar withoutOutline={true} />
            </div>
            <DialogContent className="bg-transparent flex flex-col gap-4 sm:max-w-xl p-0">
                <div className="hidden">
                    <DialogTitle>Share link</DialogTitle>
                    <DialogDescription>
                        Anyone who has this link will be able to view this.
                    </DialogDescription>
                </div>
                <div className="flex flex-col bg-white overflow-hidden rounded-lg ring-2 ring-blue">
                    <Form method="GET" action="/rechercher" className="w-full py-2 border-b-[1px] border-zinc-300">
                        <ExistingSearchParams exclude={["terme"]} />
                        <div className="flex w-full items-center space-x-2">
                            <SearchIcon className="w-5 h-5 text-blue absolute left-4" />
                            <Input className="!ps-10 shadow-none border-0 p-4 py-6 focus-visible:outline-none focus-visible:ring-0 outline-none ring-0" type="text" name="terme" placeholder="Nom, adresse, n° RIDET..." defaultValue={query ?? ''} />
                            <Button onClick={() => setIsOpen(false)} className="absolute right-4"><SearchIcon className="w-5 h-5" /></Button>
                        </div>
                    </Form>
                    <div className="flex items-center justify-between bg-blue/20 p-4 py-2">
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-normal text-primary">Naviguer</span>
                            <div className="flex items-center gap-1">
                                <Button variant="keyboard">
                                    <ArrowUp className="!w-4 !h-4 text-primary" />
                                </Button>
                                <Button variant="keyboard">
                                    <ArrowDown className="!w-4 !h-4 text-primary" />
                                </Button>
                            </div>
                        </div>
                        <DialogClose asChild>
                            <Button variant="keyboard">
                                Fermer
                            </Button>
                        </DialogClose>
                    </div>
                </div>
                <div className="bg-white p-4">
                    <p>Dernières recherche effectuées</p>
                    <ul>
                        <li><span>Tech</span></li>
                        <li><span>Tech</span></li>
                        <li><span>Tech</span></li>
                        <li><span>Tech</span></li>
                        <li><span>Tech</span></li>
                        <li><span>Tech</span></li>
                    </ul>
                </div>
            </DialogContent>
        </Dialog>

    )
}
