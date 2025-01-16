export interface IDirigeant {
    nom: string | null
    prenoms: string | null
    nom_complet: string | null
    nom_personne_morale: string | null
    date_naissance?: string | null
    nationalite?: string | null
    adresse?: string | null
    fonction?: string,
    numerochrono: number 
    ordreaffichage: number
    type_personne?: string | null
    code_postal?: string | null
    ville?: string | null
    titre_cma?: string | null
    date_de_fonction_rm?: string | null
    date_de_fonction_ra?: string | null
    situation_matrimoniale?: string | null
    maitre_apprentissage?: string | null
    qualifie_dans_son_metier?: string | null
}

export interface IFonctionDirigeant {
    Actif: boolean,
    Qualite: {
        Libelle: string
    }
}