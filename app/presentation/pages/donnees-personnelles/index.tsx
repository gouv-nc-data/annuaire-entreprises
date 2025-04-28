export default function DonneesPersonellesPage() {
    return (
        <div>
      <div className='max-w-7xl mx-auto px-4 w-full flex justify-between items-center py-20 gap-8'>
        <article className="max-w-4xl flex flex-col gap-10">

          <div className="flex flex-col gap-4">
            <h1 className="title-big">Protection des données personnelles</h1>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="title-medium">Données collectées</h1>
            <p className="text-common">
              Ce site ne collecte aucune donnée personnelle directement auprès de ses utilisateurs.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="title-medium">Données affichées</h1>
            <p className="text-common">
              Les informations affichées concernent les entreprises (raison sociale, adresse, statut juridique, numéro RIDET, numéro RCS, etc.). 
              Elles proviennent de bases de données publiques administrées par :
            </p>
            <ul className="list-disc ps-6 flex flex-col gap-2">
              <li>
                <p className="text-common">
                  l'<strong className="font-semibold">ISEE</strong> pour le RIDET ;
                </p>
              </li>
              <li>
                <p className="text-common">
                  la <strong className="font-semibold">DAE</strong> pour le RCS.
                </p>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="title-medium">Droits des personnes</h1>
            <p className="text-common">
              Conformément à la réglementation applicable en Nouvelle-Calédonie, toute personne peut demander la rectification des données la concernant auprès de l'organisme source (ISEE ou DAE).
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="title-medium">Contact</h1>
            <p className="text-common">
              Pour toute question relative à la protection de vos données, vous pouvez écrire à : <span className="font-semibold">[adresse email à compléter]</span>.
            </p>
          </div>

        </article>
      </div>
    </div>
    )
}
