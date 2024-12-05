import { Building } from "lucide-react"
import { Link } from "@remix-run/react"
import { Button } from "~/presentation/ui/button"

export default function EtablissementNotFound() {
    return (
        <section className="w-full h-[60vh] flex items-center justify-center">
            <div className="flex flex-col items-center gap-4 text-center px-4">
                <div className="ring-2 rounded-xl p-2 shadow-lg ring-orange-dinum bg-white hover:bg-white">
                    <Building strokeWidth={1.6} className="w-8 h-8 text-orange-dinum" />
                </div>
                <h3 className="text-4xl text-blue-dinum font-medium">Établissement introuvable</h3>
                <p className="text-zinc-900 font-light text-md">Mince, nous n'avons pas réussi à trouver cet établissement, veuillez réessayer plus tard.</p>
                <Link to={`/`}>
                    <Button>Revenir à l'accueil</Button>
                </Link>
            </div>
        </section>
    )
}
