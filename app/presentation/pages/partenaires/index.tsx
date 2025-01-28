import Logo from "../../header/Logo";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "../../ui/button";
import { Link } from "@remix-run/react";

export default function PartenairePage() {
    return (
        <div>
            <div className='max-w-7xl mx-auto px-4 w-full flex justify-between items-center py-20 gap-8'>
                <article className="max-w-4xl flex flex-col gap-10">
                    <div className="flex flex-col gap-4">
                        <h1 className="title-big">Administrations partenaires</h1>
                        <p className="text-common">L’Annuaire des Entreprises est conçu en partenariat avec 28 administrations différentes, qui nous transmettent les données qu’elles possèdent sur les entreprises, les associations ou les services publics :</p>
                    </div>
                    <div className="flex items-center gap-10">
                        <div className="flex-shrink-0">
                            <Logo />
                        </div>
                        <div className="flex flex-col gap-4">
                            <h1 className="title-medium">Que trouve-t-on dans l’Annuaire des Entreprises ?</h1>
                            <p className="text-common">Le ministère de l'Éducation nationale et de la Jeunesse met en œuvre dans l'académie la politique éducative définie au niveau national. Il a autorité sur le premier degré (écoles maternelles et élémentaires) et le second degré (collèges et lycées).</p>
                            <p className="text-common">Données transmises :</p>
                            <ul className="list-disc ps-6 flex flex-col gap-2">
                                <li>
                                    <p className="text-common">
                                        <a href="/" className="link-common">Informations des établissements scolaires</a>
                                    </p>
                                </li>
                            </ul>
                            <ul className="flex flex-col gap-2">
                                <li>
                                    <Link to="/se-connecter">
                                        <Button variant={'secondary'}>
                                            <ArrowRight className='w-4 h-4' />
                                            Télécharger ou réutiliser ces données
                                            <ExternalLink className='w-4 h-4' />
                                        </Button>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/se-connecter">
                                        <Button variant={'secondary'}>
                                            <ArrowRight className='w-4 h-4' />
                                            Contacter cette administration
                                            <ExternalLink className='w-4 h-4' />
                                        </Button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex items-center gap-10">
                        <div className="flex-shrink-0">
                            <Logo />
                        </div>
                        <div className="flex flex-col gap-4">
                            <h1 className="title-medium">Que trouve-t-on dans l’Annuaire des Entreprises ?</h1>
                            <p className="text-common">Le ministère de l'Éducation nationale et de la Jeunesse met en œuvre dans l'académie la politique éducative définie au niveau national. Il a autorité sur le premier degré (écoles maternelles et élémentaires) et le second degré (collèges et lycées).</p>
                            <p className="text-common">Données transmises :</p>
                            <ul className="list-disc ps-6 flex flex-col gap-2">
                                <li>
                                    <p className="text-common">
                                        <a href="/" className="link-common">Informations des établissements scolaires</a>
                                    </p>
                                </li>
                            </ul>
                            <ul className="flex flex-col gap-2">
                                <li>
                                    <Link to="/se-connecter">
                                        <Button variant={'secondary'}>
                                            <ArrowRight className='w-4 h-4' />
                                            Télécharger ou réutiliser ces données
                                            <ExternalLink className='w-4 h-4' />
                                        </Button>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/se-connecter">
                                        <Button variant={'secondary'}>
                                            <ArrowRight className='w-4 h-4' />
                                            Contacter cette administration
                                            <ExternalLink className='w-4 h-4' />
                                        </Button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* </div> */}
                </article>
            </div>
        </div>
    )
}
