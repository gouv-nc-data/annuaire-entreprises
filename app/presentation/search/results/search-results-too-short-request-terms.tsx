import { SearchIcon } from "lucide-react";

export default function SearchResultsTooShortRequestTerms() {
    return (
        <div className="flex flex-col items-start gap-4 text-left px-4">
            <h3 className="text-xl text-blue-dinum font-medium flex items-center gap-2"><SearchIcon className="w-5 h-5 text-blue-dinum" />Votre requête ne contient pas assez de paramètres de recherche pour nous permettre de vous proposer un résultat.</h3>
            <section className="flex flex-col gap-4">
                <p className="text-zinc-900 font-normal text-md">Vous pouvez, au choix :</p>
                <ul className='list-item list-disc ms-4'>
                    <li> <p className="text-zinc-900 font-normal text-md">Utiliser un terme de recherche plus long (au moins 3 lettres)</p></li>
                    <li> <p className="text-zinc-900 font-normal text-md">Effectuer une recherche avancée en utilisant les filtres (commune, structure, activité)</p></li>
                    <li> <p className="text-zinc-900 font-normal text-md">Rechercher toutes les structures liées à une personne dirigeante</p></li>
                </ul>
            </section>
        </div>
    )
}
