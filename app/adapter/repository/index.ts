import { SearchRepository } from "./search/searchRepository";

function buildRepository() {
    return {
        search: { ...SearchRepository() },
    };
}

export const Repository = buildRepository();