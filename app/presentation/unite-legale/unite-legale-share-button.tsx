import { useState } from "react"
import { Popover, PopoverTrigger, PopoverContent, } from "~/presentation/ui/popover"
import { IUniteLegale } from '~/domain/entity/unite-legale'
import { Button } from "../ui/button"
import { Share, Linkedin, Twitter, Facebook, Printer } from "lucide-react"
import { Link } from "@remix-run/react"

export default function UniteLegaleShareButton({ ridet, align }: { ridet: IUniteLegale['ridet'], align?: "center" | "end" | "start" }) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
                <Button variant="outline" className={`${isOpen ? 'ring-2 ring-blue-dinum' : ''}`}>
                    <Share className="w-4 h-4" /> Partager
                </Button>
            </PopoverTrigger>
            <PopoverContent className="shadow-2xl" align={align ? align : 'start'}>
                <div className="flex flex-col justify-start gap-4">
                    <div className="space-y-2">
                        <h4 className="font-medium text-md leading-none text-primary">Partager cette fiche entreprise</h4>
                        <p className="text-xs text-muted-foreground">
                            Vous pouvez partager cette fiche entreprise de plusieurs manières :
                        </p>
                        <ul className="flex items-center gap-2 pt-2">
                            <Link to={`/`} className="ring-2 rounded-xl p-2 shadow-lg ring-blue-100 bg-slate-100 hover:bg-white">
                                <Linkedin className="fill-blue-dinum text-transparent" />
                            </Link>
                            <Link to={`/`} className="ring-2 rounded-xl p-2 shadow-lg ring-blue-100 bg-slate-100 hover:bg-white">
                                <Twitter className="fill-blue-dinum text-transparent" />
                            </Link>
                            <Link to={`/`} className="ring-2 rounded-xl p-2 shadow-lg ring-blue-100 bg-slate-100 hover:bg-white">
                                <Facebook className="fill-blue-dinum text-transparent" />
                            </Link>
                            <Link to={`/`} className="ring-2 rounded-xl p-2 shadow-lg ring-blue-100 bg-slate-100 hover:bg-white">
                                <Printer className="text-blue-dinum" />
                            </Link>
                        </ul>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}
