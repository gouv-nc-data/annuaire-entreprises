import { useLoaderData } from "@remix-run/react";
import { getUniteLegalLoader } from "~/application/unite-legal/get-unite-legal-by-ridet";
import SearchResultsItem from "../search/components/search-results-item";

export default function UniteLegalPage() {

    const uniteLegal = useLoaderData<typeof getUniteLegalLoader>();

    return (
        <div className="container flex flex-col py-10">
            <SearchResultsItem result={uniteLegal} />
        </div>
    )
}
