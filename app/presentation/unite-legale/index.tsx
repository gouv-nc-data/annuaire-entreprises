import { useLoaderData } from "@remix-run/react";
import { getUniteLegaleLoader } from "~/application/unite-legale/get-unite-legale-by-ridet";
import SearchResultsItem from "../search/components/search-results-unite-legal";
import { useEffect } from "react";
import { setUniteLegaleHistoryToLocalStorage } from "~/application/unite-legale/unite-legale-history-store";

export default function UniteLegalePage() {

    const uniteLegale = useLoaderData<typeof getUniteLegaleLoader>();

    useEffect(() => {
        setUniteLegaleHistoryToLocalStorage(uniteLegale)
    }, [])

    return (
        <div className="container flex flex-col py-10">
            <SearchResultsItem uniteLegale={uniteLegale} />
        </div>
    )
}
