import { json, LoaderFunctionArgs, redirect } from "@remix-run/node";
import { Repository } from "~/adapter/repository";
import { UniteLegale } from "~/domain/entity/unite-legale";

export async function getUniteLegaleEtablissementLoader({ params }: LoaderFunctionArgs) {

    const ridet = params.ridet

    if (!ridet || ridet.length === 0) {
        throw redirect(`/rechercher`)
    }

    const rid = ridet.slice(0, ridet.length - 3)

    const uniteLegale = await Repository.uniteLegale.getUniteLegaleByRid(rid)

    if (uniteLegale === null || uniteLegale.results.length === 0) {
        throw json("Not Found", { status: 404 });
    }

    if (uniteLegale.erreur) {
        throw json(uniteLegale.erreur, { status: 400 });
    }

    return new UniteLegale(uniteLegale.results[0])
};

