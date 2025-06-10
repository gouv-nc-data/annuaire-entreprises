import { useLoaderData } from "@remix-run/react";
import { getUniteLegaleLoader } from "~/application/unite-legale/get-unite-legale-by-rid";
import { useEffect } from "react";
import { setUniteLegaleHistoryToLocalStorage } from "~/application/unite-legale/unite-legale-history-store";
import UniteLegaleHeader from "../unite-legale-header";
import UniteLegaleNavigation from "../unite-legale-navigation";
import UniteLegaleDirigeants from "./unite-legale-dirigeants";
import Footer from "~/presentation/footer";

export default function UniteLegaleDirigeantsPage() {

    const uniteLegale = useLoaderData<typeof getUniteLegaleLoader>();

    useEffect(() => {
        setUniteLegaleHistoryToLocalStorage(uniteLegale)
    }, [])

    return (
        <div className="flex flex-col">
            <div className="w-full max-w-7xl mx-auto px-4 py-10 flex flex-col gap-10">
                <UniteLegaleHeader uniteLegale={uniteLegale} showShareButton />
                <UniteLegaleNavigation rid={uniteLegale.rid} />
                <UniteLegaleDirigeants uniteLegale={uniteLegale} />
            </div>
            <Footer withPartenaire={false} withBacklinks={false} />
        </div>
    )
}

