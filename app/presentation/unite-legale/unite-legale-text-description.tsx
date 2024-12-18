import { Link } from "@remix-run/react";
import { Building, MapPin } from "lucide-react";
import { IUniteLegale } from "~/domain/entity/unite-legale";
import { formatDate } from "~/utils/format-date";

export default function UniteLegaleTextDescription({ uniteLegale }: { uniteLegale: IUniteLegale }) {

    const creationDate = uniteLegale.date_creation ? formatDate(uniteLegale.date_creation) : null
    const fromDate = uniteLegale.date_creation ? new Date(uniteLegale.date_creation) : null
    const now = new Date()
    let yearDifference = fromDate?.getFullYear() ? now.getFullYear() - fromDate?.getFullYear() : null

    if (yearDifference === 0) {
        yearDifference = -1
    }


    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-0">
                <p className="text-zinc-900 font-light text-md">
                    {fromDate && yearDifference && creationDate &&
                        <>
                            La société {uniteLegale.nom_complet} a été créée le <strong className="font-medium">{creationDate}</strong>, il y {yearDifference !== -1 ? yearDifference : ''} {yearDifference > 1 ? 'ans. ' : yearDifference === -1 ? "moins d'1 an. " : "an. "}
                        </>
                    }
                    {uniteLegale.forme_juridique &&
                        <>
                            Sa forme juridique est <strong className="font-medium">{uniteLegale.forme_juridique}. </strong>
                        </>
                    }
                </p>
                <p className="text-zinc-900 font-light text-md">
                    {uniteLegale.ape &&
                        <>
                            Son domaine d'activité est : <strong className="font-medium">{uniteLegale.ape}. </strong>
                        </>
                    }
                </p>
            </div>
            <div>
                <p className="flex items-center gap-2 text-zinc-900 font-light text-md">
                    <MapPin className="w-4 h-4 text-blue-dinum hidden md:inline-flex" />
                    {
                        uniteLegale.adresse_complete &&
                        <>
                            Son siège social est domicilié au {uniteLegale.adresse_complete}.
                        </>
                    }
                </p>
                <p className="flex items-center gap-2 text-zinc-900 font-light text-md">
                    <Building className="w-4 h-4 text-blue-dinum hidden md:inline-flex" />
                    {uniteLegale.etablissements ?
                        <>
                            Elle possède <Link className="text-blue-dinum font-medium border-b-1 border-blue-dinum" to={`/entreprise/${uniteLegale.rid}#etablissements`}>{uniteLegale.etablissements.length} {uniteLegale.etablissements.length > 1 ? 'établissements. ' : 'établissement. '}</Link>
                        </>
                        :
                        <>
                            Elle ne possède pas de salariés.
                        </>
                    }
                </p>
            </div>
        </div>
    )
}
