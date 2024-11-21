import { useLoaderData } from "@remix-run/react";
import { getUniteLegaleLoader } from "~/application/unite-legale/get-unite-legale-by-ridet";
import { useEffect } from "react";
import { setUniteLegaleHistoryToLocalStorage } from "~/application/unite-legale/unite-legale-history-store";
import UniteLegaleHeader from "../unite-legale-header";
import UniteLegalNavigation from "../unite-legale-navigation";

export default function UniteLegaleDirigeantsPage() {

    const uniteLegale = useLoaderData<typeof getUniteLegaleLoader>();

    useEffect(() => {
        setUniteLegaleHistoryToLocalStorage(uniteLegale)
    }, [])

    return (
        <div className="container flex flex-col py-10">
            <UniteLegaleHeader uniteLegale={uniteLegale} />
            <UniteLegalNavigation ridet={uniteLegale.ridet} />
        </div>
    )
}
