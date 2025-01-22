import { ArrowRight } from "lucide-react"
import { Button } from "../ui/button"
import LoginIllustration from '/login-illustration.png'
import LoginForm from "./login-form"

export default function LoginPage() {
    return (
        <div>
            <div className="max-w-7xl w-full mx-auto px-4 py-20">
                <header className="flex flex-col md:flex-row gap-20 w-full items-start">
                    <div className="flex flex-col gap-6 w-full md:w-1/2">
                        <div className="flex flex-col gap-6 w-full max-w-xl">
                            <h1 className="text-4xl text-blue-dinum font-medium">Les informations des entreprises sont toutes dans l’espace agent !</h1>
                            <p className="text-common">Accessible à toutes les administrations, collectivités et services publics de Nouvelle-Caléonie.</p>
                        </div>
                        <div className="flex flex-col items-start gap-4 bg-white w-full p-6 rounded-2xl shadow-sm">
                            <p className="text-zinc-900 font-medium text-md">Vous êtes agent public et souhaitez être informé quand la plateforme sera disponible ?</p>
                            <div className="flex flex-col gap-2 w-full">
                                <p className="text-zinc-900 font-light text-sm">Nous vous enverrons un mail pour vous tenir au courant.</p>
                                <LoginForm />
                            </div>
                        </div>
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
