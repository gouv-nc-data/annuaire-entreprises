import { Popover, PopoverTrigger, PopoverContent, } from "~/presentation/ui/popover"
import { IUniteLegale } from "~/domain/entity/unite-legale";
import UniteLegaleShareButton from "./unite-legale-share-button";

export default function UniteLegaleTextDescription({ uniteLegale }: { uniteLegale: IUniteLegale }) {

    const fromDate = uniteLegale.date_creation ? new Date(uniteLegale.date_creation) : null
    const now = new Date()
    let yearDifference = fromDate?.getFullYear() ? now.getFullYear() - fromDate?.getFullYear() : null

    return (
        <div className="flex flex-col gap-2">
            <p className="text-slate-700 font-normal text-base tracking-normal">
                {fromDate && yearDifference &&
                    <>
                        La société {uniteLegale.nom_complet} a été créée le <strong className="text-blue-900 font-medium">{uniteLegale.date_creation}</strong>, il y {yearDifference} {yearDifference > 1 ? 'ans. ' : 'an. '}
                    </>
                }
                {uniteLegale.forme_juridique &&
                    <>
                        Sa forme juridique est <strong className="text-blue-900 font-medium">{uniteLegale.forme_juridique}. </strong>
                    </>
                }
                {uniteLegale.ape &&
                    <>
                        Son domaine d'activité est : <strong className="text-blue-900 font-medium">{uniteLegale.ape}. </strong>
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
            <p className="text-slate-700 font-normal text-base tracking-normal">
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
