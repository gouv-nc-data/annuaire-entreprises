import { useEffect } from "react";
import { useLoaderData } from "@remix-run/react";
import { getUniteLegaleLoader } from "~/application/unite-legale/get-unite-legale-by-rid";
import { setUniteLegaleHistoryToLocalStorage } from "~/application/unite-legale/unite-legale-history-store";

import UniteLegaleHeader from "./unite-legale-header";
import UniteLegaleNavigation from "./unite-legale-navigation";
import UniteLegaleInformations from "./unite-legale-informations";
import UniteLegaleEtablissements from "./etablissements/unite-legale-etablissements";
import Footer from "../footer";

export default function UniteLegalePage() {

    const uniteLegale = useLoaderData<typeof getUniteLegaleLoader>();

    useEffect(() => {
        setUniteLegaleHistoryToLocalStorage(uniteLegale)
    }, [])

    return (
        <div className="flex flex-col bg-zinc-50">
            <div className="max-w-7xl w-full mx-auto px-4 py-10 flex flex-col gap-10">
                <UniteLegaleHeader uniteLegale={uniteLegale} showShareButton />
                <UniteLegaleNavigation rid={uniteLegale.rid} />
                <UniteLegaleInformations uniteLegale={uniteLegale} />
                <UniteLegaleEtablissements uniteLegale={uniteLegale} />
            </div>
            <Footer withPartenaire={false} withBacklinks={false} />
        </div>
    )
}
