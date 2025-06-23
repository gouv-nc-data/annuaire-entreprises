import { IUniteLegale } from '~/domain/entity/unite-legale'

export default function SituationStatus({ situation, isSmall }: { situation: IUniteLegale['situation_entreprise'], isSmall?: boolean }) {
    return (

        situation ?
            situation.toLowerCase().includes('radiée') || situation.toLowerCase().includes('radié')
                ? <span className="text-[10px] tag bg-red-200 text-red-800 ring-2  ring-red-300 px-2 py-[2px] uppercase rounded-xl font-bold" >
                    Fermée
                </span>
                : <span className="text-[10px] tag bg-green-200 ring-2  ring-green-300 text-green-800 px-2 py-[2px] uppercase rounded-xl font-bold">
                    En activité
                </span>
            : <></>
    )
}
