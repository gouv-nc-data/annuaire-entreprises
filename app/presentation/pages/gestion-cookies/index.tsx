import Footer from "~/presentation/footer";

export default function GestionCookiesPage() {
    return (
        <div>
      <div className="max-w-7xl mx-auto px-4 w-full flex justify-between items-center py-20 gap-8">
        <article className="max-w-4xl flex flex-col gap-10">

          <div className="flex flex-col gap-4">
            <h1 className="title-big">Gestion des cookies</h1>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="title-medium">Utilisation des cookies</h1>
            <p className="text-common">
              Ce site utilise des cookies uniquement pour :
            </p>
            <ul className="list-disc ps-6 flex flex-col gap-2">
              <li><p className="text-common">mesurer l’audience de fréquentation de manière anonyme,</p></li>
              <li><p className="text-common">améliorer l'expérience utilisateur.</p></li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="title-medium">Cookies utilisés</h1>
            <p className="text-common">
              Aucun cookie publicitaire n'est installé. Les cookies techniques nécessaires au bon fonctionnement du service peuvent être déposés sans consentement préalable.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="title-medium">Refuser les cookies</h1>
            <p className="text-common">
              Vous pouvez configurer votre navigateur pour refuser tout ou partie des cookies. Toutefois, certaines fonctionnalités du site pourraient être altérées.
            </p>
          </div>

        </article>
      </div>
      <Footer withPartenaire={true} withBacklinks={true} />
    </div>
    )
}
