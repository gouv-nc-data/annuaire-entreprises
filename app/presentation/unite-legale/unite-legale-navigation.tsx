import { Link, useLocation } from "@remix-run/react";
import { IUniteLegale } from "~/domain/entity/unite-legale";

export default function UniteLegalNavigation({ ridet }: { ridet: IUniteLegale['ridet'] }) {

    const location = useLocation()

    return (
        <nav className="pt-10 pb-6">
            <ul className="inline-flex items-center gap-2 bg-white p-1 rounded-xl shadow-sm border border-input">
                <li>
                    <Link className={`flex rounded-xl p-2 px-3 font-light text-sm ${location.pathname.includes('entreprise') ? 'bg-primary text-white font-normal' : 'text-slate-500 hover:bg-slate-200 hover:text-slate-600'}`} to={`/entreprise/${ridet}`}>Fiche résumé</Link>
                </li>
                <li>
                    <Link className={`rounded-xl p-2 px-3 font-light text-sm ${location.pathname.includes('dirigeants') ? 'bg-primary text-white font-normal' : 'text-slate-500 hover:bg-slate-200 hover:text-slate-600'}`} to={`/dirigeants/${ridet}`}>Dirigeants</Link>
                </li>
                <li>
                    <Link className={`rounded-xl p-2 px-3 font-light text-sm ${location.pathname.includes('documents') ? 'bg-primary text-white font-normal' : 'text-slate-500 hover:bg-slate-200 hover:text-slate-600'}`} to="">Documents</Link>
                </li>
                <li>
                    <Link className={`rounded-xl p-2 px-3 font-light text-sm ${location.pathname.includes('donnees') ? 'bg-primary text-white font-normal' : 'text-slate-500 hover:bg-slate-200 hover:text-slate-600'}`} to="">Données financières</Link>
                </li>
                <li>
                    <Link className={`rounded-xl p-2 px-3 font-light text-sm ${location.pathname.includes('annonces') ? 'bg-primary text-white font-normal' : 'text-slate-500 hover:bg-slate-200 hover:text-slate-600'}`} to="">Annonces et observations</Link>
                </li>
            </ul>
        </nav>
    )
}
