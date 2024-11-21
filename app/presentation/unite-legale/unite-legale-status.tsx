import { IUniteLegale } from "~/domain/entity/unite-legale";

export default function UniteLegaleStatus({ dateRadiation, onlyShowExpired = false }: { dateRadiation: IUniteLegale['date_radiation'], onlyShowExpired?: boolean }) {
  return (
    (dateRadiation === null)
      ?
      !onlyShowExpired
        ? <span className="tag bg-green-200 text-green-800 px-2 py-1 uppercase rounded-md font-bold">
          en activité
        </span>
        : null
      :
      <span className="tag bg-red-200 text-red-800 px-2 py-1 uppercase rounded-md font-bold" >
        Cessé
      </span >
  )
}
