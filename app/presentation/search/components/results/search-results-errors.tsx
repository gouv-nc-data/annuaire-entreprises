import { useRouteError, isRouteErrorResponse } from "@remix-run/react";
import SearchFilters from "../search-filters/search-filters";

export function SearchResultsListErrors() {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        // switch (error.status) {
        //     case 404:
        //         return <div>Invoice not found!</div>;

        //     case 400:
        //         return <div>{error.data}</div>;
        // }

        return (
            <div>
                <SearchFilters />
                <div className="py-10 max-w-7xl mx-auto px-4">
                    {error.data
                        ? <span>{error.data}</span>
                        : <span>quelque chose s'est mal passé</span>
                    }
                </div>
            </div>
        );
    }

    return (
        <div>
            <SearchFilters />
            <div className="py-10 max-w-7xl mx-auto px-4">
                <span>quelque chose s'est mal passé</span>
            </div>
        </div>
    );
}