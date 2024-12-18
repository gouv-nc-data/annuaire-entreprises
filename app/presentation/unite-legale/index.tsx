import { useEffect } from "react";
import { useLoaderData } from "@remix-run/react";
import { getUniteLegaleLoader } from "~/application/unite-legale/get-unite-legale-by-rid";
import { setUniteLegaleHistoryToLocalStorage } from "~/application/unite-legale/unite-legale-history-store";

import UniteLegaleHeader from "./unite-legale-header";
import UniteLegaleNavigation from "./unite-legale-navigation";
import UniteLegaleInformations from "./unite-legale-informations";
import UniteLegaleEtablissements from "./etablissements/unite-legale-etablissements";

export default function UniteLegalePage() {

    const uniteLegale = useLoaderData<typeof getUniteLegaleLoader>();

    useEffect(() => {
        setUniteLegaleHistoryToLocalStorage(uniteLegale)
    }, [])

    return (
        <div className="flex flex-col">
            <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col gap-10 w-full">
                <UniteLegaleHeader uniteLegale={uniteLegale} showShareButton />
                <UniteLegaleNavigation rid={uniteLegale.rid} />
                <UniteLegaleInformations uniteLegale={uniteLegale} />
                <UniteLegaleEtablissements uniteLegale={uniteLegale} />
            </div>
        </div>
    )
}
