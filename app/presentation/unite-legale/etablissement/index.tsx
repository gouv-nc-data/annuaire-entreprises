import { useEffect } from "react";
import { useLoaderData, useParams } from "@remix-run/react";
import { getUniteLegaleEtablissementLoader } from "~/application/unite-legale/get-unite-legale-by-ridet";
import { setUniteLegaleHistoryToLocalStorage } from "~/application/unite-legale/unite-legale-history-store";

import UniteLegaleHeader from "../unite-legale-header";
import UniteLegalBanner from "../unite-legale-banner";
import EtablissementNotFound from "./etablissement-not-found";
import EtablissementInformations from "./etablissement-informations";
import Footer from "~/presentation/footer";
import EtablissementLocation from "./etablissement-location";
import EtablissementTextDescription from "./etablissement-text-description";
import EtablissementUniteLegaleResume from "./etablissement-unite-legale-resume";
import { Button } from "~/presentation/ui/button";
import { Printer } from "lucide-react";

export default function UniteLegaleEtablissementPage() {

    const { uniteLegale, ENV, etablissementLocation } = useLoaderData<typeof getUniteLegaleEtablissementLoader>();
    const { ridet } = useParams()

    const etablissement = uniteLegale.etablissements.find(e => e.ridet === ridet)

    useEffect(() => {
        setUniteLegaleHistoryToLocalStorage(uniteLegale)
    }, [])

    const handleOnPrint = () => {
        window.print();
    }

    return (
        etablissement
            ? <div className="flex flex-col bg-zinc-50">
                <div className="max-w-7xl w-full mx-auto px-4 py-10 flex flex-col gap-10">
                    <div className="flex flex-col h-full">
                        <UniteLegaleHeader uniteLegale={uniteLegale} etablissement={etablissement} />
                        <div className="flex flex-row items-stretch justify-between gap-4 h-full">
                            <div className="md:w-2/5 h-full grow shrink-0">
                                <EtablissementUniteLegaleResume uniteLegale={uniteLegale} etablissement={etablissement} />
                            </div>
                            <div className="w-full md:w-3/5">
                                {ENV && ENV.ESRI_API_KEY && etablissementLocation && <EtablissementLocation ESRI_API_KEY={ENV.ESRI_API_KEY} etablissementLocation={etablissementLocation} etablissement={etablissement} />}
                            </div>
                        </div>
                    </div>
                    <div className={`w-full flex items-center justify-end`} id="print-button">
                        <Button variant="outline" onClick={handleOnPrint}>
                            <Printer className="w-4 h-4" />
                        </Button>
                    </div>
                    <EtablissementTextDescription uniteLegale={uniteLegale} etablissement={etablissement} />
                    <EtablissementInformations uniteLegale={uniteLegale} etablissement={etablissement} />
                </div>
                <Footer withPartenaire={false} withBacklinks={false} />
            </div>
            : <EtablissementNotFound />
    )
}
