import { useLoaderData } from "@remix-run/react";
import { getUniteLegalLoader } from "~/application/unite-legal/get-unite-legal-by-ridet";
import SearchResultsItem from "../search/components/search-results-item";

export default function UniteLegalPage() {

    const uniteLegal = useLoaderData<typeof getUniteLegalLoader>();

    return (
        <div className="flex flex-col">
            <SearchResultsItem result={uniteLegal} />
        </div>
    )
}
