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
            <span className="py-1 pe-1 ps-2 flex items-center">{displayLabel}</span>
            <Link to={filterLink(value)} className="flex justify-center items-center bg-blue-200 hover:bg-blue-300 py-1 px-1">
                <X className="w-4 h-4  text-blue-400" />
            </Link>
        </div>
    )
}
