import { json, LoaderFunctionArgs } from "@remix-run/node";
import { Repository } from "~/adapter/repository";
import { SearchParams } from "~/domain/entity/search-params";

export async function getSearchResultsLoader({ request }: LoaderFunctionArgs) {

    let { searchParams } = new URL(request.url);

    if (searchParams.toString().length === 0) {
        return json(null)
    }

    const query = new SearchParams(searchParams).query
    const searchResults = await Repository.search.getSearchResults(query)

    if (searchResults === null) {
        throw json("Not Found", { status: 404 });
    }

    if (searchResults.results === null) {
        throw json("Not Found", { status: 404 });
    }

    if (searchResults.erreur) {
        throw json(searchResults.erreur, { status: 400 });
    }

    return searchResults
};

