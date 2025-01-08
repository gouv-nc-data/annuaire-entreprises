import { Link } from "@remix-run/react";
import Logo from "../header/Logo";
import { ExternalLink } from "lucide-react";

export default function Footer() {
    return (
        <footer className="flex flex-col">
            <div className="bg-primary-200">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-12 py-20 gap-20">
                    <div className="flex flex-col gap-10 col-span-4 text-white">
                    </div>
                    <div className="flex flex-col gap-10 col-span-4 text-white">
                    </div>
                    <div className="flex flex-col gap-10 col-span-4 text-white">
                        <ul className="flex flex-col gap-4">
                            <li>
                                <p className="font-normal text-sm">L’Annuaire des Entreprises</p>
                            </li>
                            <li>
                                <Link to="/a-propos" className="font-light text-sm flex items-center gap-2 hover:underline text-slate-300">
                                    À propos
                                </Link>
                            </li>
                            <li>
                                <Link to="/administration" className="font-light text-sm flex items-center gap-2 hover:underline text-slate-300">
                                    Administration
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-primary-300 border-t-1 border-slate-600 pt-6 pb-8">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="w-full flex-col lg:flex-row flex items-start lg:items-center justify-between py-10">
                        <Link to="/" className='lg:w-1/2'>
                            <Logo />
                        </Link>
                        <div className="lg:w-1/2 flex flex-col gap-4">
                            <p className="text-white font-light text-md">
                                Ce site permet de retrouver toutes les données publiques détenues par l’administration sur une entreprise, une association ou une administration et en particulier les données contenues dans un extrait KBIS ou de l’extrait D1.

                                Il est opéré par la Direction Interministérielle du Numérique et la Direction Générale des Entreprises.
                            </p>
                            <ul className="flex items-center text-white">
                                <li>
                                    <Link to="https://gouv.nc/" className="flex items-center gap-2 hover:underline">
                                        gouv.nc
                                        <ExternalLink className='w-4 h-4' />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-4">
                    <ul className="flex items-center text-white gap-4">
                        <li><a href=""><span className="underline font-light text-sm">Mentions légales</span></a></li>
                        <li><a href=""><span className="underline font-light text-sm">Partenaire</span></a></li>
                        <li><a href=""><span className="underline font-light text-sm">CGU</span></a></li>
                        <li><a href=""><span className="underline font-light text-sm">Gestion des cookies</span></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
