import { History } from "lucide-react"
import { Link } from "@remix-run/react"
import UniteLegalCategory from "~/presentation/unite-legale/unite-legale-category"
import { UniteLegalHistoryItem } from "~/application/unite-legale/unite-legale-history-store"

export default function SearchModalHistory({ history, currentHistoryItem }: { history: UniteLegalHistoryItem[], currentHistoryItem: UniteLegalHistoryItem | null }) {

    return (
        <div>
            {
                history && history.length > 0
                    ?
                    <div className="">
                        <div className="flex items-center gap-2 border-b-1 border-slate-200 p-4 bg-white">
                            <p className="text-zinc-600 text-xs font-normal inline-flex items-center gap-1">
                                <History className="w-5 h-5 text-zinc-600" />
                                Vos dernières recherche effectuées
                            </p>
                            <span className="px-2 py-1 font-medium text-xs bg-zinc-200 rounded-md text-zinc-600">{history.length}</span>
                        </div>
                        <ul className="flex flex-col">
                            {
                                history.map((item: UniteLegalHistoryItem, index: number) => {
                                    const isFocused = currentHistoryItem ? currentHistoryItem.ridet === item.ridet : false

                                    return (
                                        <Link key={item.name} to={item.link} className={`${isFocused ? 'bg-blue-200' : 'hover:bg-blue-100 text-zinc-500'} inline-flex items-center gap-2 group px-4 py-2`}>
                                            <UniteLegalCategory category={"entreprise"} />
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
