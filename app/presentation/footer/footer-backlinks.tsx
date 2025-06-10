import { Link } from '@remix-run/react'

export default function FooterBacklinks() {
    return (
        <div className="bg-primary-200">
            <div className="max-w-7xl w-full mx-auto px-4 flex flex-col sm:grid grid-cols-12 py-20 gap-20">
                <div className="flex flex-col gap-10 col-span-4 text-white">
                    <ul className="flex flex-col gap-4">
                        <li>
                            <p className="font-normal text-sm">L’Annuaire des Entreprises</p>
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
    )
}
