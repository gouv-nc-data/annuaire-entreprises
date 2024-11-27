import { IUniteLegale } from "~/domain/entity/unite-legale";

export default function UniteLegaleTextDescription({ uniteLegale }: { uniteLegale: IUniteLegale }) {

    const fromDate = uniteLegale.date_creation ? new Date(uniteLegale.date_creation) : null
    const now = new Date()
    let yearDifference = fromDate?.getFullYear() ? now.getFullYear() - fromDate?.getFullYear() : null

    return (
        <div className="flex flex-col gap-2">
            <p className="text-zinc-900 font-light text-md">
                {fromDate && yearDifference &&
                    <>
                        La société {uniteLegale.nom_complet} a été créée le <strong className="font-medium">{uniteLegale.date_creation}</strong>, il y {yearDifference} {yearDifference > 1 ? 'ans. ' : 'an. '}
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
                {uniteLegale.nb_salaries ?
                    <>
                        Elle possède {uniteLegale.nb_salaries} {uniteLegale.nb_salaries > 1 ? 'salariés. ' : 'salarié. '}
                    </>
                    :
                    <>
                        Elle ne possède pas de salariés.
                    </>
                }
            </p>
            <p className="text-zinc-900 font-light text-md">
                {
                    uniteLegale.adresse_complete &&
                    <>
                        Son siège social est domicilié au {uniteLegale.adresse_complete}.
                    </>
                }
                {uniteLegale.etablissements ?
                    <>
                        Elle possède {uniteLegale.etablissements.length} {uniteLegale.etablissements.length > 1 ? 'établissements. ' : 'établissement. '}
                    </>
                    :
                    <>
                        Elle ne possède pas de salariés.
                    </>
                }
            </p>
        </div>
    )
}
