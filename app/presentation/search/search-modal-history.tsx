import { History } from "lucide-react"
import { Link } from "@remix-run/react"
import { UniteLegaleHistoryItem } from "~/application/unite-legale/unite-legale-history-store"

export default function SearchModalHistory({ history, currentSelectedItem }: { history: UniteLegaleHistoryItem[], currentSelectedItem: string | null }) {

    return (
        <div>
            {
                history && history.length > 0
                    ?
                    <div className="">
                        <div className="flex items-center gap-2 p-4 pb-2 bg-white">
                            <div className="inline-flex items-center gap-2">
                                <div className="flex items-center gap-1 text-primary font-base text-slate-900 text-xs px-1 pe-[7px] !py-1 !h-auto border-1 border-zinc-300 shadow bg-white hover:bg-zinc-100 rounded-md">
                                    <History strokeWidth={1.2} className="w-5 h-5 text-blue-dinum fill-blue-50" />
                                    {history.length}
                                </div>
                                <p className="text-slate-900 text-xs font-medium">Vos dernières recherche effectuées</p>
                            </div>
                        </div>
                        <ul className="flex flex-col bg-white px-2 pb-2">
                            {
                                history.map((item: UniteLegaleHistoryItem) => {
                                    const isFocused = currentSelectedItem ? currentSelectedItem === 'history-' + item.rid : false

                                    return (
                                        <Link key={item.name} to={item.link} className={`${isFocused ? 'bg-slate-100' : 'hover:bg-slate-100 text-slate-700'} inline-flex items-center gap-2 group px-4 py-2 rounded-lg`}>
                                            <span className="text-xs font-normal flex items-center gap-1 group-hover:text-primary">
                                                {item.name}
                                            </span>
                                            <span className="text-xs font-normal flex items-center gap-1 group-hover:text-primary bg-blue-50 px-2 rounded-md border-1 border-blue-200">
                                                {item.rid}
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
