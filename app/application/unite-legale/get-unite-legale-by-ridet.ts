import { json, LoaderFunctionArgs, redirect } from "@remix-run/node";
import { Repository } from "~/adapter/repository";
import { UniteLegale } from "~/domain/entity/unite-legale";

export async function getUniteLegaleLoader({ params }: LoaderFunctionArgs) {

    const ridet = params.slug

    if (!ridet || ridet.length === 0) {
        throw redirect(`/rechercher`)
    }

    const uniteLegale = await Repository.uniteLegale.getUniteLegaleByRidet(ridet)

    if (uniteLegale === null || uniteLegale.results.length === 0) {
        throw json("Not Found", { status: 404 });
    }

    if (uniteLegale.erreur) {
        throw json(uniteLegale.erreur, { status: 400 });
    }

    return new UniteLegale(uniteLegale.results[0])
};

