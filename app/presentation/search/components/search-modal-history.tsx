import { History } from "lucide-react"
import { Link } from "@remix-run/react"
import UniteLegaleCategory from "~/presentation/unite-legale/unite-legale-category"
import { UniteLegaleHistoryItem } from "~/application/unite-legale/unite-legale-history-store"

export default function SearchModalHistory({ history, currentHistoryItem }: { history: UniteLegaleHistoryItem[], currentHistoryItem: UniteLegaleHistoryItem | null }) {

    return (
        <div>
            {
                history && history.length > 0
                    ?
                    <div className="">
                        <div className="flex items-center gap-2 border-b-1 border-slate-200 p-4 bg-white">
                            <p className="text-slate-500 text-xs font-normal inline-flex items-center gap-1">
                                <History className="w-5 h-5 text-slate-400" />
                                Vos dernières recherche effectuées
                            </p>
                            <span className="px-2 py-1 font-medium text-xs bg-slate-200 rounded-md text-slate-500">{history.length}</span>
                        </div>
                        <ul className="flex flex-col bg-white">
                            {
                                history.map((item: UniteLegaleHistoryItem) => {
                                    const isFocused = currentHistoryItem ? currentHistoryItem.ridet === item.ridet : false

                                    return (
                                        <Link key={item.name} to={item.link} className={`${isFocused ? 'bg-slate-100' : 'hover:bg-slate-100 text-slate-500'} inline-flex items-center gap-2 group px-4 py-2`}>
                                            <span className="text-xs font-normal flex items-center gap-1 group-hover:text-primary">
                                                {item.name}
                                            </span>
                                        </Link>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    : <div></div>
            }
        </div>
    )
}
