import { Link } from "@remix-run/react";
import { X } from "lucide-react";

export default function ActiveFilter({ label, filterLink }: { label: string, filterLink: (label: string) => string }) {
    return (
        <div className="filter-tag flex" key={label}>
            <span className="py-1 px-2 flex items-center">{label}</span>
            <Link to={filterLink(label)} className="flex justify-center items-center bg-emerald-200 hover:bg-emerald-400 py-2 px-1">
                <X className="w-3 h-3" />
            </Link>
        </div>
    )
}
