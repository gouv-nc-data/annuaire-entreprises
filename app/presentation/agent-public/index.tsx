import { ArrowRight, Search } from "lucide-react"
import { Button } from "../ui/button"
import LoginIllustration from '/login-illustration.png'
import { Link } from "@remix-run/react"

export default function AgentPublicPage() {
    return (
        <div>
            <div className="max-w-4xl mx-auto px-4 py-20">
                <header className="flex flex-col items-center gap-20 w-full">
                    <div className="flex flex-col gap-10 w-full items-center">
                        <div className="flex flex-col gap-6 w-full text-center items-center justify-center">
                            <h1 className="text-4xl text-blue-dinum font-medium">Merci, nous vous tenons au courant !</h1>
                        </div>
                        <div className="w-full flex items-center justify-center max-w-md text-center">
                            <img className="w-full" src={LoginIllustration} alt="Illustrations agents publiques | Annuaire entreprise" />
                        </div>
                        <Link to={'/'}><Button><Search />Faire une recherche</Button></Link>
                    </div>

                </header>
            </div>
        </div>
    )
}
