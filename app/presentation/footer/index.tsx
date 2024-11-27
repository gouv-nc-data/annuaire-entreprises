export default function Footer() {
    return (
        <footer className="flex flex-col">
            <div className="bg-primary-200 h-[300px]">
                <div className="max-w-7xl mx-auto px-4">

                </div>
            </div>
            <div className="bg-primary-300 border-t-1 border-slate-600 px-10 pt-6 pb-8">
                <div className="max-w-7xl mx-auto px-4">
                    <ul className="flex items-center text-white gap-4">
                        <li><a href=""><span className="underline font-light text-sm">Mentions légales</span></a></li>
                        <li><a href=""><span className="underline font-light text-sm">Partenaire</span></a></li>
                        <li><a href=""><span className="underline font-light text-sm">CGU</span></a></li>
                        <li><a href=""><span className="underline font-light text-sm">Gestion des cookies</span></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
