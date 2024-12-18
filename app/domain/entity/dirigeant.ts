export interface IDirigeant {
    role: string | null
    nom: string | null
    date_naissance?: string | null
    nationalite?: string | null
    adresse?: string | null
    code_postal?: string | null
    ville?: string | null
    titre_cma?: string | null
    date_de_fonction_rm?: string | null
    date_de_fonction_ra?: string | null
    situation_matrimoniale?: string | null
    maitre_apprentissage?: string | null
    qualifie_dans_son_metier?: string | null
}

export const fakeDirigeants: IDirigeant[] = [
    {
        role: "Directrice général",
        nom: "Jeanne doe",
        date_naissance: 'avril 1990'
    },
    {
        role: "Présidente de SAS",
        nom: "Pascale de NOUMEA",
        date_naissance: 'avril 1992'
    },
    {
        role: "Président de SAS",
        nom: "Pascal de NOUMEA",
        date_naissance: 'avril 1994'
    },
]