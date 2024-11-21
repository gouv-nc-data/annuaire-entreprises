import { Link } from "@remix-run/react";
import { X } from "lucide-react";


// Data type filter can be :
// "SOME RANDOM VALUE":"Some random value"
// Where its key in lowercase === value in lowerCase
// In that case, we only want to display the value
// otherwhise we wanna display key - value

export default function ActiveFilter({ index, label, filterLink }: { index: string, label: string, filterLink: (label: string) => string }) {

    let value = index
    let displayLabel = label

    if (index.toLowerCase() !== label.toLowerCase()) {
        value = index
        displayLabel = `${index} - ${label}`
    }

    return (
        <div className="filter-tag flex" key={value}>
            <span className="py-1 px-2 flex items-center">{displayLabel}</span>
            <Link to={filterLink(value)} className="flex justify-center items-center bg-orange-400 hover:bg-orange-500 py-2 px-1">
                <X className="w-3 h-3" />
            </Link>
        </div>
    )
}
