import { useEffect, useRef } from 'react';
import { IGeoSearchResult } from '~/domain/entity/geo-search-result';

import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import VectorTileLayer from "@arcgis/core/layers/VectorTileLayer";
import TileLayer from "@arcgis/core/layers/TileLayer";
import Point from "@arcgis/core/geometry/Point";
import Graphic from "@arcgis/core/Graphic";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import PictureMarkerSymbol from "@arcgis/core/symbols/PictureMarkerSymbol";
import { IEtablissement } from '~/domain/entity/etablissement';

export default function MapComponent({ ESRI_API_KEY, etablissementLocation, etablissement }: { ESRI_API_KEY: string, etablissementLocation: IGeoSearchResult, etablissement: IEtablissement }) {    
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstanceRef = useRef<Map | null>(null);

    useEffect(() => {
        // Dynamically import Leaflet to ensure it's client-side only
        async function initMap() {
            if (mapRef.current && !mapInstanceRef.current) {

                const { features } = etablissementLocation
                const { geometry } = features[0]
                const { coordinates } = geometry
                const [lat, lng] = coordinates

                const map = new Map({
                    basemap: "gray-vector",
                });

                const vectorTileLayer = new VectorTileLayer({
                    url: "https://tiles.arcgis.com/tiles/TZcrgU6CIbqWt9Qv/arcgis/rest/services/fond_carto_web/VectorTileServer",
                    apiKey: ESRI_API_KEY
                });

                map.add(vectorTileLayer);

                const graphicsLayer = new GraphicsLayer();
                map.add(graphicsLayer);

                const point = new Point({
                    longitude: lat,
                    latitude: lng,
                });

                const markerSymbol = new PictureMarkerSymbol({
                    url: "https://static.arcgis.com/images/Symbols/Shapes/BluePin1LargeB.png", // Example marker image
                    width: "40px",
                    height: "40px",
                    xoffset: "0px",
                    yoffset: "12px", // Adjust to position the pin correctly
                });

                const pointGraphic = new Graphic({
                    geometry: point,
                    symbol: markerSymbol as any,
                    attributes: {
                        name: etablissement.nom_complet,
                        description: etablissement.adresse_complete,
                    },
                    popupTemplate: {
                        title: etablissement.nom_complet || "",
                        content: etablissement.adresse_complete,
                    },
                });

                graphicsLayer.add(pointGraphic)

                const view = new MapView({
                    container: mapRef.current,
                    map: map,
                    zoom: 13,
                    center: [lat, lng]
                });

            }
        }

        initMap();

        // Cleanup function
        return () => {
            if (mapInstanceRef.current) {
                mapInstanceRef.current.destroy();
                mapInstanceRef.current = null;
            }
        };
    }, [etablissementLocation]);

    return (<div id="map" ref={mapRef} style={{ height: '500px', width: '100%' }}></div>);
}