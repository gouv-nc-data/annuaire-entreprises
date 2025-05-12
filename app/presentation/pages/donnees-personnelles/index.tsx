export default function DonneesPersonnellesPage() {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 w-full flex justify-between items-center py-20 gap-8">
        <article className="max-w-4xl flex flex-col gap-10">

          <div className="flex flex-col gap-4">
            <h1 className="title-big">Protection des données personnelles</h1>
            <p className="text-common">
              L’annuaire des entreprises est un traitement de données personnelles géré par le Gouvernement de la Nouvelle-Calédonie,
              visant à mettre à disposition des usagers un service numérique regroupant et diffusant les informations légales publiques
              des entreprises et des travailleurs indépendants.
            </p>
            <p className="text-common">
              Le Gouvernement de la Nouvelle-Calédonie s'engage à ce que le présent traitement soit conforme au Règlement Général sur
              la Protection des Données (RGPD) et à la loi Informatique et Libertés, tels que rendus applicables en Nouvelle-Calédonie.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="title-medium">Objet du traitement de données</h1>
            <p className="text-common">
              Le présent traitement a pour finalité d’agréger et diffuser les informations légales publiques des entreprises en Nouvelle-Calédonie.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="title-medium">Données traitées</h1>
            <p className="text-common">
              Catégories de données traitées :
            </p>
            <ul className="list-disc ps-6 flex flex-col gap-2">
              <li>
                <p className="text-common">
                  Données relatives aux dirigeants des entreprises et des travailleurs indépendants : nom, prénom, adresse personnelle.
                </p>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="title-medium">Source des données</h1>
            <p className="text-common">
              Les données sont collectées via les services suivants : ISEE, DAE, xx.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="title-medium">Base légale</h1>
            <p className="text-common">
              L’annuaire des entreprises traite des données à caractère personnel en se basant sur :
            </p>
            <ul className="list-disc ps-6 flex flex-col gap-2">
              <li>
                <p className="text-common">
                  L’exécution d’une mission d’intérêt public ou relevant de l’exercice de l’autorité publique dont est investi le responsable de traitement, au sens de l’article 6-1 e) du RGPD.
                </p>
              </li>
            </ul>
            <p className="text-common">
              Cette mission d’intérêt public se traduit en pratique par le V. de l’article 4 de l’arrêté n° 2020-2245/GNC portant organisation et fonctionnement 
              de la direction du numérique et de la modernisation (DINUM).
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="title-medium">Durée de conservation des données</h1>
            <p className="text-common">
              Données relatives aux dirigeants des entreprises et des travailleurs indépendants : jusqu’à 10 ans suivant la cessation de l’activité de l’entreprise.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="title-medium">Comment garantissons-nous la sécurité de vos données ?</h1>
            <p className="text-common">
              Compte tenu de l’évolution des technologies, des coûts de mise en œuvre, de la nature des données à protéger ainsi que des risques pour les droits
              et libertés des personnes, le Gouvernement de la Nouvelle-Calédonie met en œuvre les mesures techniques et organisationnelles appropriées afin de
              garantir la confidentialité des données personnelles avec un niveau de sécurité adapté au risque.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="title-medium">Droits sur les données vous concernant</h1>
            <p className="text-common">
              Vous disposez d’un droit d’information et d’un droit d’accès à vos données, d’un droit de rectification, d’un droit d’opposition et d’un droit à la limitation du traitement.
            </p>
            <p className="text-common">
              Pour exercer vos droits, vous pouvez contacter le délégué à la protection des données (DPO) du Gouvernement de la Nouvelle-Calédonie :
            </p>
            <p className="text-common">
              <strong>Par voie postale :</strong><br />
              Délégué à la protection des données (DPO)<br />
              Immeuble le Lys Rouge, angle des rues Galliéni et Anatole France<br />
              BP M2 - 98849 Nouméa CEDEX
            </p>
            <p className="text-common">
              <strong>Par mail :</strong> <a href="mailto:donneespersonnelles@gouv.nc" className="link-common">donneespersonnelles@gouv.nc</a>
            </p>
            <p className="text-common">
              Conformément au RGPD, vous disposez également du droit d’introduire une réclamation auprès de la CNIL (3 place de Fontenoy – TSA 80715 – 75334 PARIS CEDEX 07).  
              Les modalités de réclamation sont précisées sur le site de la CNIL : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="link-common">www.cnil.fr</a>.
            </p>
          </div>

        </article>
      </div>
    </div>
  );
}
