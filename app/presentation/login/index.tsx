import { ArrowRight } from "lucide-react"
import { Button } from "../ui/button"
import LoginIllustration from '../../../public/login-illustration.png'
import LoginForm from "./login-form"

export default function LoginPage() {
    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 py-20">
                <header className="flex flex-col md:flex-row gap-6 w-full items-start">
                    <div className="flex flex-col gap-6 w-full md:w-1/2">
                        <div className="flex flex-col gap-6 w-full max-w-xl">
                            <h1 className="text-4xl text-blue-dinum font-medium">Les informations des entreprises sont toutes dans l’espace agent !</h1>
                            <p className="text-zinc-900 font-light text-md">Accessible à toutes les administrations, collectivités et services publics de l’Etat.</p>
                        </div>
                        {/* <LoginForm /> */}
                        <Button className="w-52">NC CONNECT</Button>
                        <div className="">
                            <Button variant={"link"}>
                                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                Consultez nos conditions générales d’utilisation.
                            </Button>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex items-start justify-start">
                        <img className="w-full" src={LoginIllustration} alt="Illustrations agents publiques | Annuaire entreprise" />
                    </div>
                </header>
            </div>
        </div>
    )
}
