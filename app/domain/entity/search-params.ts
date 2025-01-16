export type SearchParamskeyStringType = 'activite_principale' | 'forme_juridique' | 'ville' | 'dirigeant';

interface ISearchParams {
    q: string | null,
    ville: string[] | null,
    codePostal: string[] | null,
    page: string | null,
    formeJuridique: string[] | null
    situationEntreprise: 'I' | 'R' | null;
    activitePrincipale: string[] | null
}

export class SearchParams implements ISearchParams {

    q: string | null = null;
    ville: string[] | null = null;
    codePostal: string[] | null = null;
    page: string | null = "1"
    formeJuridique: string[] | null = null;
    activitePrincipale: string[] | null = null;
    situationEntreprise: 'I' | 'R' | null = null;
    dirigeant: string | null = null;
    perPage: string | null = null;

    //Final query sent to the search API
    query: string = ''

    //Final search params url in client
    url: string = ''

    //Booleans values to know if category filters are active
    isCityFilterActive: boolean = false
    isFormeJuridiqueFilterActive: boolean = false
    isCodeNafApeFilterActive: boolean = false

    constructor(params: URLSearchParams) {

        this.q = params.get('terme') ?? '';
        this.dirigeant = params.get('dirigeant') ?? '';
        this.page = params.get('page') ?? '1';
        this.perPage = params.get('per_page') ?? '';
        const ville = params.get('ville');
        const codePostal = params.get('code_postal')
        const formeJuridique = params.get('forme_juridique')
        const activitePrincipale = params.get('activite_principale')
        this.situationEntreprise = params.get('situation_entreprise') as 'I' | 'R' ?? ''

        if (ville && ville.length > 0) {
            this.ville = ville.split(',')
        }

        if (codePostal && codePostal.length > 0) {
            this.ville = codePostal.split(',')
        }

        if (formeJuridique && formeJuridique.length > 0) {
            this.formeJuridique = formeJuridique.split(',')
        }

        if (activitePrincipale && activitePrincipale.length > 0) {
            this.activitePrincipale = activitePrincipale.split(',')
        }

        this.checkActiveFilters()
        this.buildQuery()
        this.buildUrl()
    }

    getValue(key: SearchParamskeyStringType) {
        switch (key) {
            case ("forme_juridique"):
                return this.formeJuridique
            case ("activite_principale"):
                return this.activitePrincipale
            case ("ville"):
                return this.ville
        }
    }

    setValue(key: SearchParamskeyStringType, value: string[] | string) {
        switch (key) {
            case ("forme_juridique"):
                if (Array.isArray(value)) {
                    this.formeJuridique = value
                }
                return

            case ("activite_principale"):
                if (Array.isArray(value)) {
                    this.activitePrincipale = value
                }
                return

            case ("ville"):
                if (Array.isArray(value)) {
                    this.ville = value
                }
                return

            case ("dirigeant"):
                if (typeof value === 'string') {
                    this.dirigeant = value
                }

                return
        }
    }

    checkActiveFilters() {
        this.checkCityFilters()
        this.checkFormeJuridiqueFilters()
        this.checkCodeApeNafFilters()
    }

    checkCityFilters() {
        if (this.ville && this.ville.length > 0) {
            this.isCityFilterActive = true
        } else {
            this.isCityFilterActive = false
        }
    }

    checkFormeJuridiqueFilters() {
        if (this.formeJuridique && this.formeJuridique.length > 0) {
            this.isFormeJuridiqueFilterActive = true
        } else {
            this.isFormeJuridiqueFilterActive = false
        }
    }

    checkCodeApeNafFilters() {
        if (this.activitePrincipale && this.activitePrincipale.length > 0) {
            this.isCodeNafApeFilterActive = true
        } else {
            this.isCodeNafApeFilterActive = false
        }
    }

    buildQuery() {

        const searchParams = new URLSearchParams()

        if (this.q && this.q.length > 0) {
            searchParams.set('q', this.q)
        }

        if (this.dirigeant && this.dirigeant.length > 0) {
            searchParams.set('dirigeant', this.dirigeant)
        }

        if (this.page) {
            searchParams.set('page', this.page)
        }

        if (this.perPage) {
            searchParams.set('per_page', this.perPage)
        }

        if (this.ville && this.ville.length > 0) {
            searchParams.set('ville', this.ville.join())
        }

        if (this.codePostal && this.codePostal.length > 0) {
            searchParams.set('code_postal', this.codePostal.join())
        }

        if (this.formeJuridique && this.formeJuridique.length > 0) {
            searchParams.set('forme_juridique', this.formeJuridique.join())
        }

        if (this.activitePrincipale && this.activitePrincipale.length > 0) {
            searchParams.set('activite_principale', this.activitePrincipale.join())
        }

        if (this.situationEntreprise) {
            searchParams.set('situation_entreprise', this.situationEntreprise)
        }

        this.query = searchParams.toString()
    }

    buildUrl() {

        const searchParams = new URLSearchParams()

        if ((this.q && this.q.length > 0)) {
            searchParams.set('terme', this.q)
        }

        if ((this.dirigeant && this.dirigeant.length > 0)) {
            searchParams.set('dirigeant', this.dirigeant)
        }

        if (this.page) {
            searchParams.set('page', this.page)
        }

        if (this.ville && this.ville.length > 0) {
            searchParams.set('ville', this.ville.join())
        }

        if (this.codePostal && this.codePostal.length > 0) {
            searchParams.set('code_postal', this.codePostal.join())
        }

        if (this.formeJuridique && this.formeJuridique.length > 0) {
            searchParams.set('forme_juridique', this.formeJuridique.join())
        }

        if (this.activitePrincipale && this.activitePrincipale.length > 0) {
            searchParams.set('activite_principale', this.activitePrincipale.join())
        }

        if (this.situationEntreprise) {
            searchParams.set('situation_entreprise', this.situationEntreprise)
        }

        this.url = searchParams.toString()
    }
}