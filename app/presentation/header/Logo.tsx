import LogoSvg from '/logo.svg'

export default function Logo() {
    return (
        <div className="flex items-center gap-2">
            <img src={LogoSvg} alt="Logo de la DINUM" className='w-[150px] md:w-[200px]'/>
        </div>
    )
}
