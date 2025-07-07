import Footer from "~/presentation/footer";

export default function CguPage() {
    return (
        <div>
      <div className="max-w-7xl mx-auto px-4 w-full flex justify-between items-center py-20 gap-8">
        <article className="max-w-4xl flex flex-col gap-10">

          <div className="flex flex-col gap-4">
            <h1 className="title-big">Conditions générales d'utilisation</h1>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="title-medium">Objet du service</h1>
            <p className="text-common">
              Le site annuaire-entreprises.gouv.nc offre un accès simplifié aux données administratives publiques relatives aux entreprises de Nouvelle-Calédonie.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="title-medium">Utilisation des données</h1>
            <p className="text-common">
              Les données publiées peuvent être consultées librement, sous réserve de respecter leur usage public et de ne pas en altérer le sens.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="title-medium">Qualité des données</h1>
            <p className="text-common">
              Les informations sont issues de sources officielles des partenaires. Toutefois, l'annuaire ne garantit pas leur exhaustivité ni leur actualisation immédiate.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="title-medium">Accès et disponibilité</h1>
            <p className="text-common">
              Le service est accessible gratuitement. Le Gouvernement de la Nouvelle-Calédonie se réserve le droit de modifier ou d'interrompre le service, temporairement ou définitivement, sans préavis.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="title-medium">Évolutions</h1>
            <p className="text-common">
              Les présentes conditions peuvent être modifiées à tout moment pour refléter l'évolution du service.
            </p>
          </div>

        </article>
      </div>
      <Footer withPartenaire={false} withBacklinks={false} />
    </div>
    )
}
