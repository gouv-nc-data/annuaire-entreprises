import { IUniteLegale } from "~/domain/entity/unite-legale";

export default function UniteLegaleStatus({ etatRid, onlyShowExpired = false }: { etatRid: IUniteLegale['etat_rid'], onlyShowExpired?: boolean }) {
  return (
    <>
      {
        (etatRid === 'I')
          &&
          !onlyShowExpired
          ? <span className="tag bg-green-200 ring-2  ring-green-300 text-green-800 px-2 py-1 uppercase rounded-xl font-bold">
            Inscrite
          </span>
          : null
      }
      {
        (etatRid === 'R')
        &&
        <span className="tag bg-red-200 text-red-800 ring-2  ring-red-300 px-2 py-1 uppercase rounded-xl font-bold" >
          Radiée
        </span>
      }
      {
        (etatRid === 'S')
        &&
        <span className="tag bg-red-200 text-purple-800 ring-2  ring-purple-300 px-2 py-1 uppercase rounded-xl font-bold" >
          En sommeil
        </span>
      }
    </>
  )
}
