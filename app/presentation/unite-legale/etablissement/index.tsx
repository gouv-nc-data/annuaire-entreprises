import { useEffect } from "react";
import { useLoaderData, useParams } from "@remix-run/react";
import { getUniteLegaleLoader } from "~/application/unite-legale/get-unite-legale-by-rid";
import { setUniteLegaleHistoryToLocalStorage } from "~/application/unite-legale/unite-legale-history-store";

import UniteLegaleHeader from "../unite-legale-header";
import UniteLegalNavigation from "../unite-legale-navigation";
import UniteLegaleInformations from "../unite-legale-informations";
import UniteLegalBanner from "../unite-legale-banner";

export default function UniteLegaleEtablissementPage() {

    const uniteLegale = useLoaderData<typeof getUniteLegaleLoader>();
    const { ridet } = useParams()

    // const etablissement = uniteLegale.etablissements.find(e => e.ridet === ridet)

    const etablissement = uniteLegale.etablissements[0]


    console.log('uniteLegale :', uniteLegale)
    console.log('etablissement :', etablissement)

    useEffect(() => {
        setUniteLegaleHistoryToLocalStorage(uniteLegale)
    }, [])

    return (
        <div className="flex flex-col">
            <UniteLegalBanner uniteLegale={uniteLegale} etablissement={etablissement}/>
            <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col gap-10">
                <UniteLegaleHeader uniteLegale={uniteLegale} />
                <UniteLegaleInformations uniteLegale={uniteLegale} />
            </div>
        </div>
    )
}
