import { ArrowRight } from "lucide-react"
import { Button } from "../ui/button"
import LoginIllustration from '../../../public/login-illustration.png'
import LoginForm from "./login-form"

export default function LoginPage() {
    return (
        <div>
            <div className="container py-10">
                <header className="flex gap-4 w-full items-start">
                    <div className="flex flex-col gap-2 w-3/5">
                        <div className="flex flex-col gap-6 w-full max-w-xl">
                            <h1 className="text-3xl text-blue-dinum font-medium">Les informations des entreprises sont toutes dans l’espace agent !</h1>
                            <h2 className="text-xl text-primary">Accessible à toutes les administrations, collectivités et services publics de l’Etat.</h2>
                        </div>
                        <div className="">
                            <Button variant={"link"}>
                                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                Consultez nos conditions générales d’utilisation.
                            </Button>
                        </div>
                        <LoginForm />
                    </div>
                    <div className="w-2/5 flex items-start justify-start">
                        <img className="w-full" src={LoginIllustration} alt="Illustrations agents publiques | Annuaire entreprise" />
                    </div>
                </header>
            </div>
        </div>
    )
}
