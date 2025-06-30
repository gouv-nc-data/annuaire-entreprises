import { data, LoaderFunctionArgs, redirect } from "@remix-run/node";
import { Repository } from "~/adapter/repository";
import { IGeoSearchResult } from "~/domain/entity/geo-search-result";
import { UniteLegale } from "~/domain/entity/unite-legale";

export async function getUniteLegaleEtablissementLoader({ params }: LoaderFunctionArgs) {

    const ridet = params.ridet
    const ESRI_API_KEY = process.env.ESRI_API_KEY

    console.log('ESRI_API_KEY', ESRI_API_KEY)

    if (!ridet || ridet.length === 0) {
        throw redirect(`/rechercher`)
    }

    const rid = ridet.slice(0, ridet.length - 3)

    const uniteLegale = await Repository.uniteLegale.getUniteLegaleByRid(rid)

    if (uniteLegale === null || uniteLegale.results.length === 0) {
        throw data("Not Found", { status: 404 });
    }

    if (uniteLegale.erreur) {
        throw data(uniteLegale.erreur, { status: 400 });
    }

    const uniteLegaleEntity = new UniteLegale(uniteLegale.results[0])

    let geoSearchResult: IGeoSearchResult | null = null

    if (uniteLegaleEntity.etablissements) {
        const etablissement = uniteLegaleEntity.etablissements.find(e => e.ridet === ridet)

        if (etablissement && etablissement.adresse_complete) {
            geoSearchResult = await Repository.geolocalisation.search(etablissement.adresse_complete)
        }
    }

    return {
        uniteLegale: uniteLegaleEntity,
        etablissementLocation: geoSearchResult,
        ENV: {
            ESRI_API_KEY
        }
    }
};

