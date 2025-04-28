export default function AboutPage() {
    return (
<div>
      <div className='max-w-7xl mx-auto px-4 w-full flex justify-between items-center py-20 gap-8'>
        <article className="max-w-4xl flex flex-col gap-10">
          
          <div className="flex flex-col gap-4">
            <h1 className="title-big">L'annuaire officiel des entreprises en Nouvelle-Calédonie</h1>
            <p className="text-common">
              Bienvenue sur <a href="https://annuaire-entreprises.gouv.nc" className="link-common">annuaire-entreprises.gouv.nc</a>, 
              le service public qui facilite l'accès aux données administratives des entreprises en Nouvelle-Calédonie.
            </p>
            <p className="text-common">
              Cet annuaire agrège les informations disponibles auprès des organismes officiels, pour simplifier vos démarches et favoriser la transparence économique.
            </p>
              <p className="text-common">
              Cet annuaire facilite l’accès aux données publiques détenues par l’administration sur les entreprises de Nouvelle-Calédonie. 
              Il agrège les informations disponibles auprès des organismes officiels, pour simplifier vos démarches et favoriser la transparence économique.
            </p>
            <p className="text-common">
              Il est opéré par la Direction du Numérique et de la Modernisation du Gouvernement de la Nouvelle-Calédonie.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="title-medium">D’où viennent les informations affichées ?</h1>
            <p className="text-common">
              Actuellement, les données proviennent :
            </p>
            <ul className="list-disc ps-6 flex flex-col gap-2">
              <li>
                <p className="text-common">
                  du <strong className="font-semibold">Répertoire du Commerce et des Sociétés (RCS)</strong>, diffusées par la Direction des Affaires Économiques (DAE) du Gouvernement de la Nouvelle-Calédonie ;
                </p>
              </li>
              <li>
                <p className="text-common">
                  du <strong className="font-semibold">Répertoire d'Identification des Entreprises et de leurs Établissements (RIDET)</strong>, géré par l'Institut de la Statistique et des Études Économiques de Nouvelle-Calédonie (ISEE).
                </p>
              </li>
            </ul>
            <p className="text-common">
              Lorsque les informations RCS sont disponibles, elles sont privilégiées pour les entreprises immatriculées. À défaut, l'annuaire affiche les données issues du RIDET de l'ISEE.
            </p>
            <p className="text-common">
              <strong className="font-semibold">Attention :</strong> Toutes les entreprises ne sont pas immatriculées au RCS ; certaines sont uniquement enregistrées au RIDET de l'ISEE.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="title-medium">Un annuaire en cours d’enrichissement</h1>
            <p className="text-common">
              L'annuaire est en cours d'enrichissement. De nouveaux partenaires rejoindront bientôt la démarche pour élargir les sources de données accessibles.
            </p>
          </div>

        </article>
      </div>
    </div>
    )
}
