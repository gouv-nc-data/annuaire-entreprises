import { Link } from "@remix-run/react";
import { Building, MapPin } from "lucide-react";
import { IUniteLegale } from "~/domain/entity/unite-legale";
import { formatDate } from "~/utils/format-date";
import BasicInformation from "./common/basic-information";

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
            <div className="">
                <p className="text-common">
                    {`La société ${uniteLegale.nom_complet}`}
                    {` a été créée le `} <BasicInformation information={creationDate} />
                    {`, il y ${yearDifference !== -1 ? yearDifference : ''} ${yearDifference && yearDifference > 1 ? 'ans. ' : yearDifference === -1 ? "moins d'1 an. " : "an. "}`}
                    {`Sa forme juridique est `} <BasicInformation information={uniteLegale.forme_juridique} />
                    {` et son domaine d'activité est : `} <BasicInformation information={uniteLegale.ape} /> {uniteLegale.code_ape ? `(${uniteLegale.code_ape})` : ''}
                </p>
            </div>
            <div>
                <div className="md:flex items-center gap-2 text-common">
                    <MapPin className="w-4 h-4 text-blue-dinum hidden md:inline-flex" />
                    {
                        uniteLegale.adresse_complete &&
                        <p className="md:flex items-center gap-1">
                            Son siège social est situé au
                            <BasicInformation information={uniteLegale.adresse_physique} />
                            {uniteLegale.code_postal_physique && <BasicInformation information={uniteLegale.code_postal_physique} />}
                            <BasicInformation information={uniteLegale.ville_physique} />
                        </p>
                    }
                </div>
                <p className="flex items-center gap-2 text-common">
                    <Building className="w-4 h-4 text-blue-dinum hidden md:inline-flex" />
                    {uniteLegale.etablissements && uniteLegale.etablissements.length > 0 ?
                        <>
                            Elle possède <Link className="text-blue-dinum font-normal border-b-1 border-blue-dinum" to={`/entreprise/${uniteLegale.rid}#etablissements`}>{uniteLegale.etablissements.length} {uniteLegale.etablissements.length > 1 ? 'établissements. ' : 'établissement. '}</Link>
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
