export function formatDate(dateString: string) {

    if (!dateString) {
        return null
    }

    const date = new Date(dateString);

    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('fr-FR', options)
}

export function formatCommonDate(dateString: string) {

    if (!dateString) {
        return null
    }

    const date = new Date(dateString);

    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return date.toLocaleDateString('fr-FR', options)
}

export function formatBirthDate(dateString: string) {
    const date = new Date(dateString);

    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' };
    return date.toLocaleDateString('fr-FR', options)
}