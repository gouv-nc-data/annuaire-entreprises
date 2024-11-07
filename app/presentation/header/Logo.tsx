import LogoSvg from '/logo.svg'

export default function Logo() {
    return (
        <div className="flex items-center gap-2">
            <img src={LogoSvg} alt="Logo de la DINUM" width={250}/>
        </div>
    )
}
