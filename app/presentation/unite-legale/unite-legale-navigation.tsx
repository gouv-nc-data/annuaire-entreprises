import { Link, useLocation } from "@remix-run/react";
import { IUniteLegale } from "~/domain/entity/unite-legale";
import { BookText, UsersRound, Newspaper } from "lucide-react";

export default function UniteLegaleNavigation({ rid }: { rid: IUniteLegale['rid'] }) {

    const location = useLocation()

    return (
        <nav className="">
            <ul className="inline-flex items-center gap-1 bg-white p-1 rounded-xl shadow-sm border border-input">
                <li>
                    <Link
                        className={`flex gap-2 items-center rounded-lg p-2 px-3 font-light border-1 text-sm ${location.pathname.includes('entreprise') ? 'bg-blue-50  ring-blue-200 border-1  text-blue-dinum  font-medium' : 'text-slate-500 hover:bg-blue-50 hover:text-slate-600 border-transparent'}`}
                        to={`/entreprise/${rid}`}
                    >
                        <BookText strokeWidth={1.2} className={`${location.pathname.includes('entreprise') ? 'fill-blue-200' : 'fill-blue-50'} w-5 h-5 text-blue-dinum fill-blue-50`} />
                        <span>Fiche résumé</span>
                    </Link>
                </li>
                <li>
                    <Link
                        className={`flex gap-2 items-center  rounded-lg p-2 px-3 font-light border-1 text-sm ${location.pathname.includes('dirigeants') ? 'bg-blue-50  ring-blue-200 border-1  text-blue-dinum  font-medium' : 'text-slate-500 hover:bg-blue-50 hover:text-slate-600 border-transparent'}`}
                        to={`/dirigeants/${rid}`}>
                        <UsersRound strokeWidth={1.2} className={`${location.pathname.includes('dirigeants') ? 'fill-blue-200' : 'fill-blue-50'} w-5 h-5 text-blue-dinum `} />
                        <span>Dirigeants</span>
                    </Link>
                </li>
                <li>
                    <Link
                        className={`flex gap-2 items-center  rounded-lg p-2 px-3 font-light border-1 text-sm ${location.pathname.includes('annonces') ? 'bg-blue-50  ring-blue-200 border-1  text-blue-dinum  font-medium' : 'text-slate-500 hover:bg-blue-50 hover:text-slate-600 border-transparent'}`}
                        to={`/annonces/${rid}`}>
                        <Newspaper strokeWidth={1.2} className={`${location.pathname.includes('annonces') ? 'fill-blue-200' : 'fill-blue-50'} w-5 h-5 text-blue-dinum fill-blue-50`} />
                        <span>Annonces</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
