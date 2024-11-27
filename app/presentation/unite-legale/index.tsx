import { useLoaderData } from "@remix-run/react";
import { getUniteLegaleLoader } from "~/application/unite-legale/get-unite-legale-by-rid";
import { useEffect } from "react";
import { setUniteLegaleHistoryToLocalStorage } from "~/application/unite-legale/unite-legale-history-store";
import UniteLegaleHeader from "./unite-legale-header";
import UniteLegalNavigation from "./unite-legale-navigation";
import UniteLegaleInformations from "./unite-legale-informations";
import UniteLegalBanner from "./unite-legale-banner";

export default function UniteLegalePage() {

    const uniteLegale = useLoaderData<typeof getUniteLegaleLoader>();

    useEffect(() => {
        setUniteLegaleHistoryToLocalStorage(uniteLegale)
    }, [])

    return (
        <div className="flex flex-col">
            <UniteLegalBanner uniteLegale={uniteLegale} />
            <div className="max-w-7xl mx-auto px-4 py-10">
                <UniteLegaleHeader uniteLegale={uniteLegale} />
                <UniteLegalNavigation rid={uniteLegale.rid} />
                <UniteLegaleInformations uniteLegale={uniteLegale} />
            </div>
        </div>
    )
}
