import { IUniteLegale } from "~/domain/entity/unite-legale";
const HISTORY_LOCAL_STORAGE_KEY = "annuaire-entreprise-search-history"

export type UniteLegaleHistoryItem = {
    ridet: string
    name: string,
    link: string,
    category: string
}

export function setUniteLegaleHistoryToLocalStorage(uniteLegale: IUniteLegale) {
    let currentHistory = window.localStorage.getItem(HISTORY_LOCAL_STORAGE_KEY)
    let newHistory: UniteLegaleHistoryItem[] = currentHistory ? JSON.parse(currentHistory) : []

    const newUniteLegaleItem = {
        ridet: uniteLegale.ridet ? uniteLegale.ridet : '',
        name: `${uniteLegale.ridet} ${uniteLegale.nom_complet}`,
        link: `/entreprise/${uniteLegale.ridet}`,
        category: 'entreprise'
    }

    const alreadyFoundedUniteLegaleItem = newHistory.find(item => item.name === newUniteLegaleItem.name)

    if (alreadyFoundedUniteLegaleItem) {
        return
    }

    newHistory.push(newUniteLegaleItem)

    if (newHistory.length > 3) {
        newHistory.shift()
    }

    window.localStorage.setItem(HISTORY_LOCAL_STORAGE_KEY, JSON.stringify(newHistory));
}

export function getUniteLegaleHistoryFromLocalStorage(): UniteLegaleHistoryItem[] {
    let currentHistory = window.localStorage.getItem(HISTORY_LOCAL_STORAGE_KEY)

    return currentHistory ? JSON.parse(currentHistory) : []
}