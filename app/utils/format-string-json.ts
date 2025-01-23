export function formatPythonStringToJson(string: string) {

    try {

        // Python to js object
        let correctedString = string
            .replace(/'/g, '"') // Replace single quotes with double quotes
            .replace(/True/g, 'true') // Replace True with true
            .replace(/False/g, 'false') // Replace False with false
            .replace(/None/g, 'null') // Replace None with null
            .replace(/}\s*{/g, '},{') // Add commas between objects
            .replace(/datetime\.datetime\(([^)]+)\)/g, 'null')
            .replace("Président du conseil d\"administration", "Président du conseil d'administration")


        return JSON.parse(correctedString)

    }
    catch (err) {
        console.log('err', err)
    }

    return null
}