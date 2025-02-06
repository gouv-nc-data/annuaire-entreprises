import { Link, useSearchParams } from "@remix-run/react"
import { MapPin } from "lucide-react"
import { IUniteLegale } from "~/domain/entity/unite-legale"
import SearchResultsUniteLegaleDirigeants from "./search-results-unite-legale-dirigeants"
import SearchResultsUniteLegaleEtablissements from "./search-results-unite-legale-etablissements"
import UniteLegaleStatus from "~/presentation/unite-legale/unite-legale-status"
import BasicInformation from "~/presentation/unite-legale/common/basic-information"
import HighlightFoundedTerm from "~/presentation/ui/highlight-founded-terme";

export default function SearchResultsUniteLegale({ uniteLegale }: { uniteLegale: IUniteLegale }) {

    const [searchParams] = useSearchParams();
    const terme = searchParams.get('terme')

    return (
        <div className="flex flex-col items-start gap-2">
            <Link to={`/entreprise/${uniteLegale.rid}`} className="group flex flex-col gap-2">
                <div className="flex flex-col gap-0">
                    <div className="flex flex-col gap-0">
                        <div className="flex items-center gap-4">
                            {uniteLegale.nom_complet && <div className="text-blue-dinum uppercase font-medium text-lg"><HighlightFoundedTerm value={uniteLegale.nom_complet} terms={terme} hoverUnderline={true} /></div>}
                            <UniteLegaleStatus etatRid={uniteLegale.etat_rid} onlyShowExpired={true} />
                        </div>
                        <div className="inline-block gap-2">
                            {uniteLegale.ape && <p className="text-slate-800 text-md font-normal inline-block">{uniteLegale.ape}</p>}
                            {uniteLegale.code_ape && uniteLegale.code_ape !== '.' && <p className="text-slate-800 text-md font-normal inline-block ps-1">({uniteLegale.code_ape})</p>}
                        </div>
                    </div>
                    {
                        uniteLegale.dirigeants && uniteLegale.dirigeants.length > 0 &&
                        <div className="flex items-center gap-0 pt-1">

                            <SearchResultsUniteLegaleDirigeants dirigeants={uniteLegale.dirigeants} />
                        </div>
                    }
                </div>
            </Link>
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1 text-slate-600">
                    <MapPin strokeWidth={1.6} className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-slate-700" />
                    <div className="block">
                        {uniteLegale.adresse_physique && <BasicInformation extraClass="!inline !text-sm !font-light !text-primary-300 !uppercase !tracking-wide inline" isBold isBlue information={<HighlightFoundedTerm value={uniteLegale.adresse_physique} terms={terme} hoverUnderline={true} />} />}
                        <BasicInformation extraClass="inline !text-sm !font-light !text-primary-300 !uppercase !tracking-wide inline" isBold isBlue information={uniteLegale.ville_physique} />
                    </div>
                </div>
                <div className="flex flex-col ms-6">
                    {
                        uniteLegale.etablissements && uniteLegale.etablissements.length > 0 &&
                        <SearchResultsUniteLegaleEtablissements rid={uniteLegale.rid} etablissements={uniteLegale.etablissements} uniteLegale={uniteLegale} />
                    }
                </div>
            </div>
        </div>
    )
}
