import { IGeolocalisationRepository } from '~/domain/ports/geolocalisation-repository';
import { IGeoSearchResult } from '~/domain/entity/geo-search-result';

export function GeolocalisationRepository(): IGeolocalisationRepository {

    async function search(address: string): Promise<IGeoSearchResult> {
        const res = await fetch(`${process.env.GEO_NC_SEARCH_URL}/search?q=${address}&index=poi,address`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        })
        return res.json()
    }

    return { search };
}