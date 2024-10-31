import { useRouteError, isRouteErrorResponse } from "@remix-run/react";

export function SearchResultsListErrors() {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        switch (error.status) {
            case 404:
                return <div>Invoice not found!</div>;

            case 400:
                return <div>{error.data}</div>;
        }

        return (
            <div>
                Something went wrong: {error.status}{" "}
                {error.statusText}
            </div>
        );
    }

    return (
        <div>
            Something went wrong:{" "}
        </div>
    );
}