import { type ActionFunctionArgs, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { SearchParams } from "~/models/search-params";

import { getSearchResults } from "~/lib/search/results.server";
import Search from "~/components/search";

export async function loader({ request }: LoaderFunctionArgs) {
    let { searchParams } = new URL(request.url);

    const params = new SearchParams(searchParams).buildQuery()

    return getSearchResults(params)
};

export default function SearchResults() {
    const results = useLoaderData<typeof loader>();

    return (
        <div>
            <Search />
            <h1>Results</h1>
            <ul className="flex flex-col gap-2 divide-y-2">
                {
                    results.results.map((result: any) => {
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
