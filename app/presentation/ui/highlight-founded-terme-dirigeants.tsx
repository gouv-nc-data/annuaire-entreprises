import { removeAccents } from "~/utils/remove_accents";

export default function HighlightFoundedTermDirigeants({ terms, value, hoverUnderline }: { terms: string | null, value: string, hoverUnderline?: boolean }) {
    if (!terms || !value) {
        return <span className="inline">{value}</span>;
    }

    // Split the value by the regex pattern and map over the parts
    const parts = value.split(' ').map(part => part.replace(/,/g, ''));

    return (
        <span className={`flex flex-wrap gap-1 ${hoverUnderline ? 'group-hover:underline' : ''}`}>
            {parts.map((part, index) => {
                const splittedTerms = terms.split(' ').map(term => term.replace(/,/g, ''));
                const isMatch = splittedTerms.some(term => removeAccents(part).toLowerCase().includes(removeAccents(term).toLowerCase()));

                return isMatch ? (
                    <span className="inline bg-blue-100" key={index}>{part}</span>
                ) : (<span className="inline" key={index}>{part}</span>);
            })}
        </span>
    );
}