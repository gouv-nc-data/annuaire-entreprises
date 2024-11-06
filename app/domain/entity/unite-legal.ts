export interface IUniteLegal {
    ridet: string | null
    designation: string | null
    enseigne: string | null
    forme_juridique: string | null
    adresse_physique: string | null
    code_postal_physique: string | null
    ville_physique: string | null
    adresse_postale: string | null
    code_postal_postale: string | null
    ville_postale: string | null
    telephone: string | null
    email: string | null
    ape: string | null
    code_ape: string | null
    activites_secondaires: string | null
    code_nafa: string | null
    code_nafa_secondaires: string | null
    nb_salaries: number | null
    tranche_effectif_salaries: string | null
    taille_structure: string | null
    date_creation: Date | null
    date_radiation: Date | null
    motif_radiation: string | null
    convention_collective: string | null
    nom_complet: string | null
    adresse_complete: string | null

    numero_rcs: string | null
    date_immat_rcs: Date | null
    date_radiation_rsc: Date | null
    capital_social: number | null
    capital_fixe: boolean
    data_cloture_exercice_comptable: string | null
    duree_personne_morale: string | null

    numero_rm: string | null
    date_immat_rm: Date | null
    date_radiation_rm: Date | null

    numero_rap: string | null
    date_immat_rap: Date | null
    date_radiation_rap: Date | null
}

export class UniteLegal implements IUniteLegal {
    ridet: string | null = null
    designation: string | null = null
    enseigne: string | null = null
    forme_juridique: string | null = null
    adresse_physique: string | null = null
    code_postal_physique: string | null = null
    ville_physique: string | null = null
    adresse_postale: string | null = null
    code_postal_postale: string | null = null
    ville_postale: string | null = null
    telephone: string | null = null
    email: string | null = null
    ape: string | null = null
    code_ape: string | null = null
    activites_secondaires: string | null = null
    code_nafa: string | null = null
    code_nafa_secondaires: string | null = null
    nb_salaries: number | null = null
    tranche_effectif_salaries: string | null = null
    taille_structure: string | null = null
    date_creation: Date | null = null
    date_radiation: Date | null = null
    motif_radiation: string | null = null
    convention_collective: string | null = null
    nom_complet: string | null = null
    adresse_complete: string | null = null

    numero_rcs: string | null = null
    date_immat_rcs: Date | null = null
    date_radiation_rsc: Date | null = null
    capital_social: number | null = null
    capital_fixe: boolean = false
    data_cloture_exercice_comptable: string | null = null
    duree_personne_morale: string | null = null

    numero_rm: string | null = null
    date_immat_rm: Date | null = null
    date_radiation_rm: Date | null = null

    numero_rap: string | null = null
    date_immat_rap: Date | null = null
    date_radiation_rap: Date | null = null
}