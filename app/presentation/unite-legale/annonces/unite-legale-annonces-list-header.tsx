export default function UniteLegaleAnnoncesListHeader() {
    return (
        <ul className='hidden md:grid grid-cols-12 w-full gap-4'>
            <li className='col-span-2'>
                <span className="text-base font-medium text-primary">Date</span>
            </li>
            <li className='col-span-8'>
                <span className="text-base font-medium text-primary">Details</span>
            </li>
            <li className='col-span-2'>
                <span className="text-base font-medium text-primary">Annonce</span>
            </li>
        </ul>
    )
}
