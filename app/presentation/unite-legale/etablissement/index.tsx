import { useEffect } from "react";
import { useLoaderData, useParams } from "@remix-run/react";
import { getUniteLegaleLoader } from "~/application/unite-legale/get-unite-legale-by-rid";
import { setUniteLegaleHistoryToLocalStorage } from "~/application/unite-legale/unite-legale-history-store";

import UniteLegaleHeader from "../unite-legale-header";
import UniteLegalBanner from "../unite-legale-banner";
import EtablissementNotFound from "./etablissement-not-found";
import EtablissementInformations from "./etablissement-informations";
import Footer from "~/presentation/footer";

export default function UniteLegaleEtablissementPage() {

    const uniteLegale = useLoaderData<typeof getUniteLegaleLoader>();
    const { ridet } = useParams()

    const etablissement = uniteLegale.etablissements.find(e => e.ridet === ridet)

    // const etablissement = uniteLegale.etablissements[0]

    useEffect(() => {
        setUniteLegaleHistoryToLocalStorage(uniteLegale)
    }, [])

    return (
        etablissement
            ? <div className="flex flex-col">
                <UniteLegalBanner uniteLegale={uniteLegale} etablissement={etablissement} />
                <div className="max-w-7xl w-full mx-auto px-4 py-10 flex flex-col gap-10">
                    <UniteLegaleHeader uniteLegale={uniteLegale} etablissement={etablissement} />
                    <EtablissementInformations uniteLegale={uniteLegale} etablissement={etablissement} />
                </div>
                <Footer withPartenaire={false} withBacklinks={false} />
            </div>
            : <EtablissementNotFound />
    )
}
