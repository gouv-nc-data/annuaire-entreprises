export default function UniteLegaleDirigeantsInformationsListHeader() {
    return (
        <ul className='hidden md:grid grid-cols-12 w-full gap-4'>
            <li className='col-span-4'>
                <span className="text-base font-medium text-primary">Role</span>
            </li>
            <li className='col-span-4'>
                <span className="text-base font-medium text-primary">Details</span>
            </li>
            <li className='col-span-4'>
                <span className="text-base font-medium text-primary">Action</span>
            </li>
        </ul>
    )
}
