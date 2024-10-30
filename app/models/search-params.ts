export class SearchParams {
    q: string;

    constructor(params: URLSearchParams) {

        let terms = params.get("terme") ?? '';

        this.q = terms;
    }

    buildQuery() {
        return `?q=${this.q}`
    }
}