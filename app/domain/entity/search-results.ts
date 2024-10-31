import { UniteLegal } from "./unite-legal";

export class SearchResults {
    results: UniteLegal[] = [];
    total_results: number = 0;
    per_page: number = 0;
    total_pages: number = 0;
    erreur?: string
}