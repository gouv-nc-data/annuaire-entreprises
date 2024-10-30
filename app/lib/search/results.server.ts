import { json } from "@remix-run/node";

export async function getSearchResults(query: string) {
    console.log('params in getSearch results : ', query)

    const res = await fetch(`http://127.0.0.1:8000/api/v1/recherche${query}`)

    return json(await res.json())
}