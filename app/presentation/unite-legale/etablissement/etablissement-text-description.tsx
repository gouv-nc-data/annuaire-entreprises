import { Link } from "@remix-run/react";

import { IEtablissement } from "~/domain/entity/etablissement";
import { IUniteLegale } from "~/domain/entity/unite-legale";
import TooltipInfo from "~/presentation/ui/tooltip-info";
import { formatDate } from "~/utils/format-date";

import { Building, MapPin } from "lucide-react";

export default function EtablissementTextDescription({ uniteLegale, etablissement }: { uniteLegale: IUniteLegale, etablissement: IEtablissement }) {

    const creationDate = uniteLegale.date_creation ? formatDate(uniteLegale.date_creation) : null
    const fromDate = uniteLegale.date_creation ? new Date(uniteLegale.date_creation) : null
    const now = new Date()
    let yearDifference = fromDate?.getFullYear() ? now.getFullYear() - fromDate?.getFullYear() : null

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-0">
                <div className="text-common flex items-center gap-2">
                    <p className="hidden md:flex">
                        <TooltipInfo
                            label='Cet établissement'
                            content="Une société est constituée d’autant d’établissements qu’il y a de lieux différents où elle exerce - ou a exercé - son activité. Il faut bien distinguer la fiche résumé de l'entreprise et les fiches de ses établissements."
                        />
                    </p>
                    <p className="">
                        <span className="inline-flex md:hidden">Cet établissement</span> immatriculé sous le ridet {etablissement.ridet} est <span className="lowercase">{etablissement.situation}</span>.
                    </p>
                </div>
                <p className="text-common">
                    {etablissement.ape &&
                        <>
                            Son domaine d'activité est : <strong className="font-medium">{etablissement.ape}.</strong>
                        </>
                    }
                    {etablissement.code_ape &&
                        <>
                            <strong className="font-medium">({etablissement.code_ape}).</strong>
                        </>
                    }
                </p>
                {etablissement.adresse_complete &&
                    <p className="text-common flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-orange-500 hidden md:inline-flex" />
                        {
                            uniteLegale.adresse_complete &&
                            <>
                                Il est domicilié au {etablissement.adresse_complete}.
                            </>
                        }
                    </p>
                }
            </div>
            <p className="text-common">
                {fromDate && yearDifference && creationDate &&
                    <>
                        {etablissement.nom_complet} est un établissement de l'entreprise {uniteLegale.nom_complet} qui a été créée le <strong className="font-medium">{creationDate}</strong>, il y {yearDifference} {yearDifference > 1 ? 'ans. ' : 'an. '}
                    </>
                }
                {uniteLegale.forme_juridique &&
                    <>
                        Sa forme juridique est <strong className="font-medium">{uniteLegale.forme_juridique}. </strong>
                    </>
                }
                {uniteLegale.ape &&
                    <>
                        Son domaine d'activité est : <strong className="font-medium">{uniteLegale.ape}. </strong>
                    </>
                }
            </p>
            <div>
                <p className="flex items-center gap-2 text-common">
                    <MapPin className="w-4 h-4 text-blue-dinum hidden md:inline-flex" />
                    {
                        uniteLegale.adresse_complete &&
                        <>
                            Son siège social est domicilié au {uniteLegale.adresse_complete}.
                        </>
                    }
                </p>
                <p className="flex items-center gap-2 text-common">
                    <Building className="w-4 h-4 text-blue-dinum hidden md:inline-flex" />
                    {uniteLegale.etablissements ?
                        <>
                            Elle possède <Link className="link" to={`/entreprise/${uniteLegale.rid}#etablissements`}>{uniteLegale.etablissements.length} {uniteLegale.etablissements.length > 1 ? 'établissements. ' : 'établissement. '}</Link>
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
