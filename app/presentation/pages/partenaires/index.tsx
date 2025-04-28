import Logo from "../../header/Logo";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "../../ui/button";
import { Link } from "@remix-run/react";

export default function PartenairePage() {
    return (
        (
    <div>
      <div className="max-w-7xl mx-auto px-4 w-full flex justify-between items-center py-20 gap-8">
        <article className="max-w-4xl flex flex-col gap-10">

          <div className="flex flex-col gap-4">
            <h1 className="title-big">Nos partenaires</h1>
            <p className="text-common">
              Ce service est rendu possible grâce à la collaboration avec :
            </p>
          </div>

          {/* ISEE */}
          <div className="flex items-center gap-10">
            <div className="flex-shrink-0">
              <Logo />
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="title-medium">Institut de la Statistique et des Études Économiques (ISEE)</h1>
              <p className="text-common">
                L'ISEE fournit les données d'identification des entreprises inscrites au RIDET.
              </p>
              <div className="flex flex-col gap-2">
                <a href="https://www.isee.nc/a-propos-de-l-isee/localisation" target="_blank" rel="noopener noreferrer">
                  <Button variant={'secondary'}>
                    Contacter cet organisme
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* DAE */}
          <div className="flex items-center gap-10">
            <div className="flex-shrink-0">
              <Logo />
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="title-medium">Direction des Affaires Économiques (DAE)</h1>
              <p className="text-common">
                La DAE fournit les données issues du Registre du Commerce et des Sociétés (RCS).
              </p>
              <div className="flex flex-col gap-2">
                <a href="https://dae.gouv.nc/contactez-nous" target="_blank" rel="noopener noreferrer">
                  <Button variant={'secondary'}>
                    Contacter cet organisme
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Prochainement */}
          <div className="flex flex-col gap-4">
            <h1 className="title-medium">Bientôt de nouveaux partenaires</h1>
            <p className="text-common">
              D'autres partenaires rejoindront prochainement l'annuaire pour élargir les sources de données accessibles :
            </p>
            <ul className="list-disc ps-6 flex flex-col gap-2">
              <li><p className="text-common">Chambre des Métiers et de l'Artisanat de Nouvelle-Calédonie (CMA-NC)</p></li>
              <li><p className="text-common">Chambre de Commerce et d'Industrie de Nouvelle-Calédonie (CCI-NC)</p></li>
              <li><p className="text-common">CAP-NC</p></li>
              <li><p className="text-common">CAFAT</p></li>
            </ul>
            <p className="text-common">
              Ensemble, nous construisons un annuaire plus complet et plus fiable pour tous les acteurs économiques du territoire.
            </p>
          </div>

        </article>
      </div>
    </div>
    )
}
