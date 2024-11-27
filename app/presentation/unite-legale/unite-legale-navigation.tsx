import { Link, useLocation } from "@remix-run/react";
import { IUniteLegale } from "~/domain/entity/unite-legale";
import { BookText, UsersRound } from "lucide-react";

export default function UniteLegalNavigation({ ridet }: { ridet: IUniteLegale['ridet'] }) {

    const location = useLocation()

    return (
        <nav className="pt-10 pb-6">
            <ul className="inline-flex items-center gap-1 bg-white p-1 rounded-xl shadow-sm border border-input">
                <li>
                    <Link className={`flex gap-2 items-center rounded-lg p-2 px-3 font-light border-1 text-sm ${location.pathname.includes('entreprise') ? 'bg-blue-50  ring-blue-200 border-1  text-blue-dinum  font-medium' : 'text-slate-500 hover:bg-blue-50 hover:text-slate-600 border-transparent'}`} to={`/entreprise/${ridet}`}><BookText className="w-4 h-4" />Fiche résumé</Link>
                </li>
                <li>
                    <Link className={`flex gap-2 items-center  rounded-lg p-2 px-3 font-light border-1 text-sm ${location.pathname.includes('dirigeants') ? 'bg-blue-50  ring-blue-200 border-1  text-blue-dinum  font-medium' : 'text-slate-500 hover:bg-blue-50 hover:text-slate-600 border-transparent'}`} to={`/dirigeants/${ridet}`}><UsersRound className="w-4 h-4" />Dirigeants</Link>
                </li>
                {/* <li>
                    <Link className={`flex gap-2 items-center  rounded-lg p-2 px-3 font-light text-sm ${location.pathname.includes('documents') ? 'bg-blue-100 ring-2 ring-blue-200 border-1  text-primary text-white font-normal' : 'text-slate-500 hover:bg-slate-200 hover:text-slate-600'}`} to="">Documents</Link>
                </li>
                <li>
                    <Link className={`flex gap-2 items-center  rounded-lg p-2 px-3 font-light text-sm ${location.pathname.includes('donnees') ? 'bg-blue-100 ring-2 ring-blue-200 border-1  text-primary text-white font-normal' : 'text-slate-500 hover:bg-slate-200 hover:text-slate-600'}`} to="">Données financières</Link>
                </li>
                <li>
                    <Link className={`flex gap-2 items-center  rounded-lg p-2 px-3 font-light text-sm ${location.pathname.includes('annonces') ? 'bg-blue-100 ring-2 ring-blue-200 border-1  text-primary text-white font-normal' : 'text-slate-500 hover:bg-slate-200 hover:text-slate-600'}`} to="">Annonces et observations</Link>
                </li> */}
            </ul>
        </nav>
    )
}
