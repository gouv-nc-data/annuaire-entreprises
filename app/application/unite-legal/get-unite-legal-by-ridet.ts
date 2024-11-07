import { json, LoaderFunctionArgs, redirect } from "@remix-run/node";
import { Repository } from "~/adapter/repository";
import { UniteLegal } from "~/domain/entity/unite-legal";

export async function getUniteLegalLoader({ params }: LoaderFunctionArgs) {

    const ridet = params.slug

    if (!ridet || ridet.length === 0) {
        throw redirect(`/rechercher`)
    }

    const uniteLegal = await Repository.uniteLegal.getUniteLegalByRidet(ridet)

    if (uniteLegal === null || uniteLegal.results.length === 0) {
        throw json("Not Found", { status: 404 });
    }

    if (uniteLegal.erreur) {
        throw json(uniteLegal.erreur, { status: 400 });
    }

    return new UniteLegal(uniteLegal.results[0])
};

