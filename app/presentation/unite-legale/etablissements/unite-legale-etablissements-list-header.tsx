export default function UniteLegaleEtablissementsListHeader() {
    return (
        <ul className='hidden md:grid grid-cols-12 w-full gap-4'>
            <li className='col-span-1'>
                <span className="text-base font-medium text-primary">RIDET</span>
            </li>
            <li className='col-span-3'>
                <span className="text-base font-medium text-primary">Activité (NAF/APE)</span>
            </li>
            <li className='col-span-3'>
                <span className="text-base font-medium text-primary">Détails (nom, enseigne, adresse)</span>
            </li>
            <li className='col-span-2'>
                <span className="text-base font-medium text-primary">Création</span>
            </li>
            <li className='col-span-2'>
                <span className="text-base font-medium text-primary">État</span>
            </li>
        </ul>
    )
}
