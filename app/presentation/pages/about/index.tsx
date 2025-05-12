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
              Ce service permet de retrouver toutes les données publiques détenues par l’administration sur une entreprise ou un travailleur indépendant en Nouvelle-Calédonie.  
              Ce site ne fait que centraliser les données, sans les modifier: il agrège les informations disponibles auprès des organismes officiels, pour simplifier vos démarches et favoriser la transparence économique.
            </p>
            <p className="text-common">
              Il rassemble plusieurs types de données sur les entreprises et les travailleurs indépendants, dont les informations générales : adresse, RIDET, code NAF/APE, informations sur le siège social, ainsi que la liste des établissements. 
            </p>
            </div>

          <div className="flex flex-col gap-4">
            <h1 className="title-medium">D’où viennent les informations affichées ?</h1>
            <p className="text-common">
                Toutes les informations affichées sur ce site sont des informations publiques.
            </p>
            <p className="text-common">
                Actuellement, elles proviennent des registres ou répertoires suivants : 
            </p>
            <ul className="list-disc ps-6 flex flex-col gap-2">
              <li>
                <p className="text-common">
                  du <strong className="font-semibold">Répertoire du Commerce et des Sociétés (RCS)</strong>, géré par la Direction des Affaires Économiques (DAE) du Gouvernement de la Nouvelle-Calédonie ;
                </p>
              </li>
              <li>
                <p className="text-common">
                  du <strong className="font-semibold">Répertoire d'Identification des Entreprises et de leurs Établissements (RIDET)</strong>, géré par l'Institut de la Statistique et des Études Économiques de Nouvelle-Calédonie (ISEE).
                </p>
              </li>
            </ul>
            <p className="text-common">
              Lorsque les informations RCS sont disponibles, elles sont privilégiées pour les entreprises immatriculées. À défaut, l'annuaire affiche les données issues du RIDET.
            </p>
            <p className="text-common">
              <strong className="font-semibold">Attention :</strong> Toutes les entreprises ne sont pas immatriculées au RCS ; certaines sont uniquement enregistrées au RIDET.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="title-medium">Un annuaire en cours d’enrichissement</h1>
            <p className="text-common">
              L'annuaire est en cours d'enrichissement. De nouveaux partenaires rejoindront bientôt la démarche pour élargir les sources de données accessibles.
            </p>
          </div>

        <div className="flex flex-col gap-4">
          <h1 className="title-medium">Effacer mes données personnelles</h1>
          <p className="text-common">
            En tant que dirigeant(e) d’entreprise ou travailleur indépendant, les données publiques publiées sur ce site peuvent contenir des informations personnelles vous concernant (nom et prénom).
          </p>
          <p className="text-common">
            En outre, pour les travailleurs indépendants, ces données publiques sont susceptibles de contenir votre adresse personnelle.
          </p>
          <p className="text-common">
            Ces données sont publiques mais vous pouvez vous opposer à ce qu’un site internet les publie.
          </p>
          <p className="text-common">
            Ainsi, pour faire disparaître ces informations du site web <a href="https://annuaire-entreprises.gouv.nc" className="link-common">annuaire-entreprises.gouv.nc</a>, 
            vous pouvez nous en faire la demande, en nous transmettant un justificatif d’identité, à l’adresse suivante : 
            <a href="mailto:data@gouv.nc" className="link-common">data@gouv.nc</a>.
          </p>
        </div>


        </article>
      </div>
    </div>
    )
}
