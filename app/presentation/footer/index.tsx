import { Link } from "@remix-run/react";
import { ExternalLink } from "lucide-react";
import LogoHorizontalPng from '/logo-horizontal.png'


export default function Footer() {
    return (
        <footer className="flex flex-col">
            <div className="bg-primary-200">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-12 py-20 gap-20">
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
                                <Link to="/partenaires" className="font-light text-sm flex items-center gap-2 hover:underline text-slate-300">
                                    Partenaires
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-10 col-span-4 text-white">
                        <ul className="flex flex-col gap-4">
                            <li>
                                <p className="font-normal text-sm">Autres sites</p>
                            </li>
                            <li>
                                <Link to="https://guichet-entreprises.nc/" className="font-light text-sm flex items-center gap-2 hover:underline text-slate-300">
                                    Guichet-entreprises.nc
                                </Link>
                            </li>
                            <li>
                                <Link to="https://data.gouv.nc/pages/accueil/" className="font-light text-sm flex items-center gap-2 hover:underline text-slate-300">
                                    Data.gouv.nc
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.infogreffe.nc/" className="font-light text-sm flex items-center gap-2 hover:underline text-slate-300">
                                    Infogreffe NC
                                </Link>
                            </li>
                            <li>
                                <Link to="https://avisridet.isee.nc/" className="font-light text-sm flex items-center gap-2 hover:underline text-slate-300">
                                    Avis RIDET
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
                            <img src={LogoHorizontalPng} alt="Logo de la DINUM" className='w-[150px] md:w-[200px]' />
                        </Link>
                        <div className="lg:w-1/2 flex flex-col gap-4">
                            <p className="text-white font-light text-md">
                                Ce site permet de retrouver toutes les données publiques détenues par l’administration sur une entreprise, une association ou une administration et en particulier les données contenues dans un extrait KBIS ou un avis de situation au RIDET.
                                Il est opéré par la Direction du Numérique et de la Modernisation du gouvernement de la Nouvelle-Calédonie.
                            </p>
                            <ul className="flex items-center text-white">
                                <li>
                                    <Link to="https://numerique.gouv.nc/" className="flex items-center gap-2 hover:underline">
                                        Numerique.gouv.nc/
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
