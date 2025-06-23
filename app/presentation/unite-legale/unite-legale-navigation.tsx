import { Link, useLocation } from "@remix-run/react";
import { IUniteLegale } from "~/domain/entity/unite-legale";
import { BookText, UsersRound, Newspaper } from "lucide-react";

export default function UniteLegaleNavigation({ rid, isEtablissement }: { rid: IUniteLegale['rid'], isEtablissement?: boolean }) {

    const location = useLocation()

    return (
        <nav className="w-full">
            <ul className={`${isEtablissement ? 'flex flex-col' : 'flex sm:inline-flex sm:flex-row flex-col sm:items-center bg-white p-1 rounded-xl shadow-sm border border-input gap-2'}`}>
                <li>
                    <Link
                        className={`flex gap-2 items-center rounded-lg p-2 px-3 font-light border-1 text-sm ${location.pathname.includes('entreprise') ? 'bg-blue-50  ring-blue-200 border-1 text-blue-dinum font-normal' : 'text-slate-500 hover:bg-blue-50 hover:text-slate-600 border-transparent'}`}
                        to={`/entreprise/${rid}`}
                    >
                        <BookText strokeWidth={1.2} className={`${location.pathname.includes('entreprise') ? 'fill-blue-200' : 'fill-blue-50'} w-5 h-5 text-blue-dinum`} />
                        <span>Fiche résumé</span>
                    </Link>
                </li>
                <li>
                    <Link
                        className={`flex gap-2 items-center  rounded-lg p-2 px-3 font-light border-1 text-sm ${location.pathname.includes('dirigeants') ? 'bg-blue-50  ring-blue-200 border-1  text-blue-dinum  font-normal' : 'text-slate-500 hover:bg-blue-50 hover:text-slate-600 border-transparent'}`}
                        to={`/dirigeants/${rid}`}>
                        <UsersRound strokeWidth={1.2} className={`${location.pathname.includes('dirigeants') ? 'fill-blue-200' : 'fill-blue-50'} w-5 h-5 text-blue-dinum `} />
                        <span>Dirigeants</span>
                    </Link>
                </li>
                <li>
                    <Link
                        className={`flex gap-2 items-center  rounded-lg p-2 px-3 font-light border-1 text-sm ${location.pathname.includes('annonces') ? 'bg-blue-50  ring-blue-200 border-1  text-blue-dinum  font-normal' : 'text-slate-500 hover:bg-blue-50 hover:text-slate-600 border-transparent'}`}
                        to={`/annonces/${rid}`}>
                        <Newspaper strokeWidth={1.2} className={`${location.pathname.includes('annonces') ? 'fill-blue-200' : 'fill-blue-50'} w-5 h-5 text-blue-dinum`} />
                        <span>Annonces</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
