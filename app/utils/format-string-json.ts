export function formatPythonStringToJson(string: string) {

    // Python to js object
    let correctedString = string
        .replace(/'/g, '"') // Replace single quotes with double quotes
        .replace(/True/g, 'true') // Replace True with true
        .replace(/None/g, 'null') // Replace None with null
        .replace(/}\s*{/g, '},{'); // Add commas between objects

    return JSON.parse(correctedString)
}