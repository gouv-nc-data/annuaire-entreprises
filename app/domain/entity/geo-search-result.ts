export interface IGeoSearchResult {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [number, number]
            },
            "properties": {
                "label": string,
                "score": number,
                "housenumber": string,
                "id": string,
                "banId": string,
                "name": string,
                "postcode": string,
                "citycode": string,
                "x": number,
                "y": number,
                "city": string,
                "context": string,
                "type": string,
                "importance": number,
                "street": string,
                "_type": "address"
            }
        }
    ]
}