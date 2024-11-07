import { useLoaderData } from "@remix-run/react";
import { getUniteLegalLoader } from "~/application/unite-legal/get-unite-legal-by-ridet";
import SearchResultsItem from "../search/components/search-results-unite-legal";
import { useEffect } from "react";
import { setUniteLegalHistoryToLocalStorage } from "~/application/unite-legal/unite-legal-history-store";

export default function UniteLegalPage() {

    const uniteLegal = useLoaderData<typeof getUniteLegalLoader>();

    useEffect(() => {
        setUniteLegalHistoryToLocalStorage(uniteLegal)
    }, [])

    return (
        <div className="container flex flex-col py-10">
            <SearchResultsItem uniteLegal={uniteLegal} />
        </div>
    )
}
