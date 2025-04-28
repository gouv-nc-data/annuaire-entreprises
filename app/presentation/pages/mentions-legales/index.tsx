export default function MentionLegalesPage() {
    return (
<div>
      <div className="max-w-7xl mx-auto px-4 w-full flex justify-between items-center py-20 gap-8">
        <article className="max-w-4xl flex flex-col gap-10">

          {/* Titre principal */}
          <div className="flex flex-col gap-4">
            <h1 className="title-big">Mentions légales</h1>
          </div>

          {/* Informations éditeur */}
          <div className="flex flex-col gap-4">
            <h1 className="title-medium">Informations éditeur</h1>
            <p className="text-common">
              Éditeur : Gouvernement de la Nouvelle-Calédonie - Direction du Numérique et de la Modernisation (DINUM)
            </p>
            <p className="text-common">
              Adresse : 127, rue Arnold Daly - BP M2 - 98 849 Nouméa CEDEX
            </p>
            <p className="text-common">
              Adresse de courrier électronique : <a href="mailto:dinum@gouv.nc" className="link-common">dinum@gouv.nc</a>
            </p>
            <p className="text-common">
              Téléphone : +687 27 58 88 - Fax : +687 28 19 19
            </p>
          </div>

          {/* Informations publication */}
          <div className="flex flex-col gap-4">
            <h1 className="title-medium">Informations publication</h1>
            <p className="text-common">
              Directeur de la publication : Monsieur Alcide Ponga, président du gouvernement de la Nouvelle-Calédonie
            </p>
            <p className="text-common">
              Adresse : « Immeuble le Lys Rouge », angle des rues Galliéni et Anatole France - BP M2 - 98 849 Nouméa CEDEX
            </p>
            <p className="text-common">
              Adresse de courrier électronique : <a href="mailto:pole.communication@gouv.nc" className="link-common">pole.communication@gouv.nc</a>
            </p>
            <p className="text-common">
              Téléphone : +687 24 65 65
            </p>
          </div>

          {/* Réalisation, maintenance et hébergement */}
          <div className="flex flex-col gap-4">
            <h1 className="title-medium">Réalisation, maintenance et hébergement</h1>
            <p className="text-common">
              Ce site est hébergé par la Direction du Numérique et de la Modernisation (DINUM) du Gouvernement de la Nouvelle-Calédonie.
            </p>
          </div>

          {/* Propriété intellectuelle */}
          <div className="flex flex-col gap-4">
            <h1 className="title-medium">Propriété intellectuelle</h1>
            <p className="text-common">
              Sauf mention contraire, les contenus présents sur le site sont mis à disposition sous licence ouverte.
            </p>
          </div>

          {/* Responsabilité */}
          <div className="flex flex-col gap-4">
            <h1 className="title-medium">Responsabilité</h1>
            <p className="text-common">
              Le Gouvernement de la Nouvelle-Calédonie s'efforce de garantir l'exactitude et l'actualisation des informations diffusées sur le site.
              Toutefois, certaines erreurs ou omissions peuvent subsister. <br />
              Les données affichées proviennent directement des organismes partenaires (ISEE, DAE, etc.). Elles sont fournies à titre indicatif et n'ont pas de valeur contractuelle.
            </p>
          </div>

          {/* Liens hypertextes */}
          <div className="flex flex-col gap-4">
            <h1 className="title-medium">Liens hypertextes</h1>
            <p className="text-common">
              La présence de liens hypertextes vers d'autres sites ne saurait engager la responsabilité du Gouvernement de la Nouvelle-Calédonie quant à leur contenu.
            </p>
          </div>

          {/* Données personnelles */}
          <div className="flex flex-col gap-4">
            <h1 className="title-medium">Protection des données personnelles</h1>
            <p className="text-common">
              Pour plus d’informations sur le traitement des données personnelles, veuillez consulter la page dédiée : 
              <a href="/donnees-personnelles" className="link-common"> Protection des données personnelles</a>.
            </p>
          </div>

        </article>
      </div>
    </div>
    )
}
