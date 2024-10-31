
export interface IUniteLegal {
    nom_complet: string | null
    ridet: string | null
    sigle: string | null
    enseigne: string | null
    forme_juridique: string | null
    adresse_complete: string | null
    adresse: string | null
    code_postal: string | null
    ville: string | null
}

export class UniteLegal {
    nom_complet: string | null = null
    ridet: string | null = null
    sigle: string | null = null
    enseigne: string | null = null
    forme_juridique: string | null = null
    adresse_complete: string | null = null
    adresse: string | null = null
    code_postal: string | null = null
    ville: string | null = null
}