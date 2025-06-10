export default function SearchResultsEmpty() {
    return (
        <div className="flex flex-col items-start gap-4 text-left px-4">
            <h3 className="text-2xl text-blue-dinum font-medium">Aucune structure n'a été trouvée pour vos critères de recherche. Nous vous suggérons de modifier votre recherche :</h3>
            <section className="flex flex-col gap-4">
                <p className="text-zinc-900 font-normal text-md">Nous vous suggérons de modifier votre recherche :</p>
                <ul className='list-item list-disc ms-4'>
                    <li> <p className="text-zinc-900 font-normal text-md">vérifiez l'orthographe des mots-clefs utilisés</p></li>
                    <li> <p className="text-zinc-900 font-normal text-md">si vous connaissez le n° RIDET de l'entreprise recherchée, tapez uniquement celui-ci dans la barre de recherche</p></li>
                    <li> <p className="text-zinc-900 font-normal text-md">essayez de réduire le nombre de mots-clefs</p></li>
                    <li> <p className="text-zinc-900 font-normal text-md">essayez d'utiliser un filtre avancé plus précis que la recherche générale, comme la commune, la forme juridique, l'activité principale, ou le nom-prénom du dirigeant</p></li>
                </ul>
            </section>
        </div>
    )
}
