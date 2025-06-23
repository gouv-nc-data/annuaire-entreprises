import { useEffect, useRef } from 'react';
import type { Map } from 'leaflet';
import { IGeoSearchResult } from '~/domain/entity/geo-search-result';

export default function MapComponent({ MAPTILER_API_KEY, etablissementLocation }: { MAPTILER_API_KEY: string, etablissementLocation: IGeoSearchResult }) {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstanceRef = useRef<Map | null>(null);

    useEffect(() => {
        // Dynamically import Leaflet to ensure it's client-side only
        async function initMap() {
            if (mapRef.current && !mapInstanceRef.current) {
                const L = await import('leaflet');

                const { features } = etablissementLocation
                const { geometry } = features[0]
                const { coordinates } = geometry
                const [lat, lng] = coordinates

                const map = L.map(mapRef.current).setView([lng, lat], 13);
                mapInstanceRef.current = map;

                L.tileLayer(`https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=${MAPTILER_API_KEY}`, {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(map);

                L.marker([lng, lat]).addTo(map).bindPopup(features[0].properties.label)
            }
        }

        initMap();

        // Cleanup function
        return () => {
            if (mapInstanceRef.current) {
                mapInstanceRef.current.remove();
                mapInstanceRef.current = null;
            }
        };
    }, [etablissementLocation]);

    return <div id="map" ref={mapRef} style={{ height: '500px', width: '100%' }}></div>;
}