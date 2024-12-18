export default function UniteLegaleDirigeantsListHeader() {
    return (
        <ul className='hidden md:grid grid-cols-12 w-full gap-4'>
            <li className='col-span-3'>
                <span className="text-base font-medium text-primary">Role</span>
            </li>
            <li className='col-span-7'>
                <span className="text-base font-medium text-primary">Details</span>
            </li>
            <li className='col-span-2'>
                <span className="text-base font-medium text-primary">Action</span>
            </li>
        </ul>
    )
}
