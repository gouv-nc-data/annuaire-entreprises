import { useLoaderData } from "@remix-run/react";
import { getSearchResultsLoader } from "~/application/search";

export function SearchResultsList() {
    const results = useLoaderData<typeof getSearchResultsLoader>();

    return (
        <div>
            <h1>Results</h1>
            <ul className="flex flex-col gap-2 divide-y-2">
                {
                    results.results.map((result) => {
                        return (
                            <li key={result.ridet}>
                                <p>{result.nom_complet}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}