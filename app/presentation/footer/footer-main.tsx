import { Link } from '@remix-run/react'
import LogoHorizontalPng from '/logo-horizontal.png'
import { ExternalLink } from 'lucide-react'

export default function FooterMain() {
    return (
        <div className="bg-primary-300 border-t-1 border-slate-600 pt-6 pb-8">
            <div className="max-w-7xl w-full mx-auto px-4">
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
            <div className="max-w-7xl w-full mx-auto px-4">
                <ul className="flex items-center text-white gap-4">
                    <li><Link to="/a-propos"><span className="underline font-light text-sm">À propos</span></Link></li>
                    <li><Link to="/mentions-legales"><span className="underline font-light text-sm">Mentions légales</span></Link></li>
                    <li><Link to="/retours-usagers"><span className="underline font-light text-sm">Contact</span></Link></li>
                    <li><Link to="/gestion-cookies"><span className="underline font-light text-sm">Gestion des cookies</span></Link></li>
                    <li><Link to="/donnees-personnelles"><span className="underline font-light text-sm">Données personnelles</span></Link></li>
                </ul>
            </div>
        </div>
    )
}
