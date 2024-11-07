import { IUniteLegal } from "~/domain/entity/unite-legal";
const HISTORY_LOCAL_STORAGE_KEY = "annuaire-entreprise-search-history"

export type UniteLegalHistoryItem = {
    ridet: string
    name: string,
    link: string,
    category: string
}

export function setUniteLegalHistoryToLocalStorage(uniteLegal: IUniteLegal) {
    let currentHistory = window.localStorage.getItem(HISTORY_LOCAL_STORAGE_KEY)
    let newHistory: UniteLegalHistoryItem[] = currentHistory ? JSON.parse(currentHistory) : []

    const newUniteLegalItem = {
        ridet: uniteLegal.ridet ? uniteLegal.ridet : '',
        name: `${uniteLegal.ridet} ${uniteLegal.nom_complet}`,
        link: `/entreprise/${uniteLegal.ridet}`,
        category: 'entreprise'
    }

    const alreadyFoundedUniteLegalItem = newHistory.find(item => item.name === newUniteLegalItem.name)

    if (alreadyFoundedUniteLegalItem) {
        return
    }

    newHistory.push(newUniteLegalItem)
    window.localStorage.setItem(HISTORY_LOCAL_STORAGE_KEY, JSON.stringify(newHistory));
}

export function getUniteLegalHistoryFromLocalStorage(): UniteLegalHistoryItem[] {
    let currentHistory = window.localStorage.getItem(HISTORY_LOCAL_STORAGE_KEY)

    return currentHistory ? JSON.parse(currentHistory) : []
}