import { useLoaderData } from "@remix-run/react";
import { getUniteLegaleLoader } from "~/application/unite-legale/get-unite-legale-by-ridet";
import { useEffect } from "react";
import { setUniteLegaleHistoryToLocalStorage } from "~/application/unite-legale/unite-legale-history-store";
import UniteLegaleHeader from "./unite-legale-header";
import UniteLegalNavigation from "./unite-legale-navigation";
import UniteLegaleInformations from "./unite-legale-informations";

export default function UniteLegalePage() {

    const uniteLegale = useLoaderData<typeof getUniteLegaleLoader>();

    useEffect(() => {
        setUniteLegaleHistoryToLocalStorage(uniteLegale)
    }, [])

    return (
        <div className="container flex flex-col py-10">
            <UniteLegaleHeader uniteLegale={uniteLegale} />
            <UniteLegalNavigation ridet={uniteLegale.ridet} />
            <UniteLegaleInformations uniteLegale={uniteLegale} />
        </div>
    )
}
