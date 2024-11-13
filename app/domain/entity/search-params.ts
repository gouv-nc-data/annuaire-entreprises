
export type SearchParamskeyStringType = 'forme_juridique' | 'ville';

interface ISearchParams {
    q: string | null,
    ville: string[] | null,
    codePostal: string[] | null,
    page: string | null,
    formeJuridique: string[] | null
}

export class SearchParams implements ISearchParams {

    q: string | null = null;
    ville: string[] | null = null;
    codePostal: string[] | null = null;
    page: string | null = "1"
    formeJuridique: string[] | null = null;

    //Final query sent to the search API
    query: string = ''

    //Booleans values to know if category filters are active
    isAdministrativeFilterActive: boolean = false
    isCityFilterActive: boolean = false

    constructor(params: URLSearchParams) {

        this.q = params.get('terme') ?? '';
        this.page = params.get('page') ?? '1';
        const ville = params.get('ville');
        const codePostal = params.get('code_postal')
        const formeJuridique = params.get('forme_juridique')

        if (ville && ville.length > 0) {
            this.ville = ville.split(',')
        }

        if (codePostal && codePostal.length > 0) {
            this.ville = codePostal.split(',')
        }

        if (formeJuridique && formeJuridique.length > 0) {
            this.formeJuridique = formeJuridique.split(',')
        }

        this.checkActiveFilters()
        this.buildQuery()
    }

    getValue(key: SearchParamskeyStringType) {
        switch (key) {
            case ("forme_juridique"):
                return this.formeJuridique
        }
    }

    setValue(key: SearchParamskeyStringType, value: any) {

        switch (key) {
            case ("forme_juridique"):
                this.formeJuridique = value
                return
            case ("ville"):
                this.ville = value
                return
        }
    }

    checkActiveFilters() {
        this.checkCityFilters()
        this.checkAdministrativeFilters()
    }

    checkCityFilters() {
        if (this.ville && this.ville.length > 0) {
            this.isCityFilterActive = true
        } else {
            this.isCityFilterActive = false
        }
    }

    checkAdministrativeFilters() {
        if (this.formeJuridique && this.formeJuridique.length > 0) {
            this.isAdministrativeFilterActive = true
        } else {
            this.isAdministrativeFilterActive = false
        }
    }

    buildQuery() {

        const searchParams = new URLSearchParams()

        if (this.q && this.q.length > 0) {
            searchParams.set('q', this.q)
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

        this.query = searchParams.toString()
    }
}