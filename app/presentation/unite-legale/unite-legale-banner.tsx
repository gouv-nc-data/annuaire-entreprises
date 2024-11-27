import { IUniteLegale } from "~/domain/entity/unite-legale";
import UniteLegaleCategory from "./unite-legale-category";
import UniteLegaleShareButton from "./unite-legale-share-button";

export default function UniteLegalBanner({ uniteLegale }: { uniteLegale: IUniteLegale }) {
    return (
        <div className="py-6 border-b-1 bg-slate-200 rounded-xl border-slate-200 rounded-t-none">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center gap-2">
                <div className="flex items-center gap-2">
                    {/* <UniteLegaleCategory category={"Établissement"} /> */}
                    <UniteLegaleCategory category={"entreprise"} />
                </div>
                <UniteLegaleShareButton ridet={uniteLegale.ridet} align="end" />
            </div>
        </div>
    )
}
