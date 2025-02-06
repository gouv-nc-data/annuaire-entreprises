import { removeAccents } from "~/utils/remove_accents";

export default function HighlightFoundedTerm({ terms, value, hoverUnderline }: { terms: string | null, value: string, hoverUnderline?: boolean }) {
    if (!terms || !value) {
        return <span className="inline">{value}</span>;
    }

    // Create a regex pattern to match the terms globally and case-insensitively
    const regex = new RegExp(`(${removeAccents(terms)})`, 'gi');

    // Split the value by the regex pattern and map over the parts
    const parts = value.split(regex);

    return (
        <span className={`${hoverUnderline ? 'group-hover:underline' : ''}`}>
            {parts.map((part, index) =>
                regex.test(part) ? (
                    <span className="inline bg-yellow-200" key={index}>{part}</span>
                ) : (<span className="inline whitespace-pre-wrap" key={index}>{part}</span>)
            )}
        </span>
    );
}