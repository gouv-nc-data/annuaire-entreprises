export class SearchParams {

    q: string | null = null;
    ville: string[] | null = null;
    codePostal: string[] | null = null;

    query: string = ''

    constructor(params: URLSearchParams) {

        console.log('params', params)

        this.q = params.get("terme") ?? '';
        const ville = params.get("ville")
        const codePostal = params.get("code_postal")

        if (ville && ville.length > 0) {
            this.ville = ville.split(',')
        }

        if (codePostal && codePostal.length > 0) {
            this.ville = codePostal.split(',')
        }

        this.buildQuery()
    }

    buildQuery() {

        console.log('this.ville', this.ville)
        console.log('this.codePostal', this.codePostal)

        const searchParams = new URLSearchParams()

        if (this.q && this.q.length > 0) {
            searchParams.set('q', this.q)
        }

        if (this.ville && this.ville.length > 0) {
            searchParams.set('ville', this.ville.join())
        }

        if (this.codePostal && this.codePostal.length > 0) {
            searchParams.set('code_postal', this.codePostal.join())
        }

        console.log('build query : ', searchParams)

        this.query = searchParams.toString()
    }
}