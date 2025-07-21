import { data, LoaderFunctionArgs } from "@remix-run/node";
import { Repository } from "~/adapter/repository";
import { SearchParams } from "~/domain/entity/search-params";

export async function getSearchResultsLoader({ request }: LoaderFunctionArgs) {

    let { searchParams } = new URL(request.url);

    if (searchParams.toString().length === 0) {
        return data(null)
    }

    const query = new SearchParams(searchParams).query
    const searchResults = await Repository.search.getSearchResults(query)

    if (searchResults === null) {
        throw data("Not Found", { status: 404 });
    }

    if (searchResults.results === null) {
        throw data("Not Found", { status: 404 });
    }

    if (searchResults.erreur) {
        throw data(searchResults.erreur, { status: 400 });
    }

    return searchResults
};

