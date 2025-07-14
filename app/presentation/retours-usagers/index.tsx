import { ArrowRight, CheckCircle, XCircle } from "lucide-react"
import { Button } from "../ui/button"
// eslint-disable-next-line import/no-unresolved
import LoginIllustration from '/login-illustration.png'
import Footer from "../footer"
import UsageForm from "./usage-form"
import { useSearchParams } from "@remix-run/react"

export default function LoginPage() {

    const [searchParams] = useSearchParams()
    const success = searchParams.get('success')

    return (
        <div className="bg-zinc-50">
            {success &&
                <div className={`flex flex-col gap-4 ${success === 'true' ? 'bg-green-200' : 'bg-red-200'} p-4 shadow-sm w-full justify-center items-center`}>
                    {success === 'true' && <p className="text-green-900 flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Retour envoyé avec succès</p>}
                    {success === 'false' && <p className="text-red-900 flex items-center gap-2"><XCircle className="w-4 h-4" /> Retour non envoyé, veuillez réessayer</p>}
                </div>
            }
            <div className="max-w-7xl w-full mx-auto px-4 py-20">
                <header className="flex flex-col md:flex-row gap-20 w-full items-start">
                    <div className="flex flex-col gap-6 w-full md:w-1/2">
                        <div className="flex flex-col gap-6 w-full max-w-xl">
                            <h1 className="text-4xl text-blue-dinum font-medium">Retour et demande de fonctionnalités</h1>
                            <p className="text-common">Contactez-nous pour nous faire part de vos retours et demandes.</p>
                        </div>
                        <div className="flex flex-col items-start gap-4 bg-white w-full p-6 rounded-2xl shadow-sm">
                            <p className="text-zinc-900 font-medium text-md">En quoi consiste votre retour ?</p>
                            <div className="flex flex-col gap-2 w-full">
                                <UsageForm />
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
            <Footer withPartenaire={false} withBacklinks={false} />
        </div>
    )
}
