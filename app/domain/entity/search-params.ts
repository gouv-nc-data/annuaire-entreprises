export class SearchParams {

    q: string | null = null;
    ville: string[] | null = null;
    codePostal: string[] | null = null;
    page: string | null = "1"
    formeJuridique: string[] | null = null;

    query: string = ''

    constructor(params: URLSearchParams) {

        this.q = params.get('terme') ?? '';
        this.page = params.get('page') ?? '1';
        const ville = params.get('ville')?.replace(/\s/g, '');
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

        this.buildQuery()
    }

    getValue(key: string) {
        switch (key) {
            case ("forme_juridique"):
                return this.formeJuridique
        }
    }

    setValue(key: string, value: any) {
        switch (key) {
            case ("forme_juridique"):
                this.formeJuridique = value
            case ("ville"):
                this.ville = value
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