import { Link } from "@remix-run/react";

import { IEtablissement } from "~/domain/entity/etablissement";
import { IUniteLegale } from "~/domain/entity/unite-legale";
import TooltipInfo from "~/presentation/ui/tooltip-info";
import { formatDate } from "~/utils/format-date";

import { Building, MapPin } from "lucide-react";
import BasicInformation from "../common/basic-information";

export default function EtablissementTextDescription({ uniteLegale, etablissement }: { uniteLegale: IUniteLegale, etablissement: IEtablissement }) {

    const creationDate = uniteLegale.date_creation ? formatDate(uniteLegale.date_creation) : null
    const fromDate = uniteLegale.date_creation ? new Date(uniteLegale.date_creation) : null
    const now = new Date()
    const yearDifference = fromDate?.getFullYear() ? now.getFullYear() - fromDate?.getFullYear() : null

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-0">
                <div className="text-common flex items-center gap-2">
                    <p className="hidden md:flex">
                        <TooltipInfo
                            label='Cet établissement'
                            content="Une société est constituée d’autant d’établissements qu’il y a de lieux différents où elle exerce - ou a exercé - son activité. Il faut bien distinguer la fiche résumé de l'entreprise et les fiches de ses établissements."
                            isEtablissement
                        />
                    </p>
                    <p className="">
                        <span className="inline-flex md:hidden">Cet établissement</span> immatriculé sous le ridet {etablissement.ridet} est <span className="lowercase"><BasicInformation isBold information={etablissement.situation} /></span>.
                    </p>
                </div>
                <p className="text-common">
                    {etablissement.ape &&
                        <>
                            Son domaine d&apos;activité est : <strong className="font-medium"><BasicInformation isBold information={etablissement.ape} /></strong>
                        </>
                    }
                    {etablissement.code_ape &&
                        <>
                            <strong className="font-medium"> (<BasicInformation information={etablissement.code_ape} />).</strong>
                        </>
                    }
                </p>
                {etablissement.adresse_complete &&
                    <div className="text-common md:flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-orange-600 hidden md:inline-flex" />
                        Il est situé au
                        {
                            uniteLegale.adresse_complete &&
                            <BasicInformation information={etablissement.adresse_complete} />
                        }
                    </div>
                }
            </div>
            <div className="text-common w-full">
                {fromDate && yearDifference && creationDate &&
                    <div className="inline-block">
                        <BasicInformation information={etablissement.nom_complet} /> est un établissement de l&apos;entreprise <span className="-mt-2"><BasicInformation information={uniteLegale.nom_complet} /></span> qui a été créée le <strong className="font-medium">{creationDate}</strong>, il y {yearDifference} {yearDifference > 1 ? 'ans. ' : 'an. '}
                    </div>
                }
                {uniteLegale.forme_juridique &&
                    <div>
                        Sa forme juridique est <strong className="font-medium"><BasicInformation information={uniteLegale.forme_juridique} />.</strong>
                    </div>
                }
                {uniteLegale.ape &&
                    <>
                        Son domaine d&apos;activité est : <strong className="font-medium">{uniteLegale.ape}. </strong>
                    </>
                }
            </div>
            <div>
                <p className="flex items-center gap-2 text-common">
                    <MapPin className="w-4 h-4 text-blue-dinum hidden md:inline-flex" />
                    {
                        uniteLegale.adresse_complete &&
                        <>
                            Son siège social est situé au
                            <BasicInformation isBold information={uniteLegale.adresse_physique} />
                            {uniteLegale.code_postal_physique && <BasicInformation isBold information={uniteLegale.code_postal_physique} />}
                            <BasicInformation isBold information={uniteLegale.ville_physique} />
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
