import { lazy, Suspense, useMemo } from 'react'
import { IEtablissement } from '~/domain/entity/etablissement'
import { IGeoSearchResult } from '~/domain/entity/geo-search-result'
import { ClientOnly } from "remix-utils/client-only"
import EtablissementMap from './etablissement-map.client'

export default function EtablissementLocation({ ESRI_API_KEY, etablissementLocation, etablissement }: { ESRI_API_KEY: string, etablissementLocation: IGeoSearchResult, etablissement: IEtablissement }) {

    return (
        <div className='relative w-full rounded-xl bg-white shadow-sm flex-1 overflow-hidden h-full min-h-[100px]'>
            {/* <img className="absolute left-0 top-0 w-full h-full object-cover" src={LocationIllustration} alt="Illustrations agents publiques | Annuaire entreprise" /> */}
            <ClientOnly fallback={<div>Loading...</div>}>
                {() => <EtablissementMap ESRI_API_KEY={ESRI_API_KEY} etablissementLocation={etablissementLocation} etablissement={etablissement} />}
            </ClientOnly>
        </div>
    )
}
