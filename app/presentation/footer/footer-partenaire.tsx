import { Link } from '@remix-run/react'
import LogoIsee from '/logo_isee.png'
import LogoCma from '/logo_cma.png'
import LogoCapNc from '/logo_capnc.png'
import LogoCci from '/logo_cci.png'
import LogoCafat from '/logo_cafat.png'
import LogoGnc from '/logo_gnc.jpeg'

export default function FooterPartenaire() {
    return (
        <div className="bg-white border-t-1">
            <div className="max-w-7xl w-full mx-auto px-4 py-20 gap-20 flex flex-col">
                <div className="flex items-center justify-center w-full">
                    <Link to="/partenaires" className="text-xl font-light flex items-center gap-2 hover:underline text-slate-900">
                        Nos partenaires actuels et à venir
                    </Link>
                </div>
                <ul className="flex flex-col sm:grid grid-cols-12 gap-4">
                    <li className="flex items-center w-full justify-center col-span-2">
                        <img src={LogoIsee} alt="Logo ISEE" className='block w-[120px] md:w-[100px]' />
                    </li>
                    <li className="flex items-center w-full justify-center col-span-2">
                        <img src={LogoCma} alt="Logo CMA" className='w-[120px] md:w-[100px]' />
                    </li>
                    <li className="flex items-center w-full justify-center col-span-2">
                        <img src={LogoCapNc} alt="Logo CAPNC" className='w-[120px] md:w-[100px]' />
                    </li>
                    <li className="flex items-center w-full justify-center col-span-2">
                        <img src={LogoCci} alt="Logo CCI" className='w-[120px] md:w-[100px]' />
                    </li>
                    <li className="flex items-center w-full justify-center col-span-2">
                        <img src={LogoCafat} alt="Logo CAFAT" className='w-[120px] md:w-[100px]' />
                    </li>
                    <li className="flex items-center w-full justify-center col-span-2">
                        <img src={LogoGnc} alt="Logo GNC" className='w-[120px] md:w-[100px]' />
                    </li>
                </ul>
            </div>
        </div>
    )
}
