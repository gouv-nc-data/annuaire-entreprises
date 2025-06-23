import { Suspense } from 'react'
import Map from './etablissement-map'
import { IGeoSearchResult } from '~/domain/entity/geo-search-result'

export default function EtablissementLocation({ MAPTILER_API_KEY, etablissementLocation }: { MAPTILER_API_KEY: string, etablissementLocation: IGeoSearchResult }) {

    return (
        <div className='relative w-full rounded-xl bg-white shadow-sm flex-1 overflow-hidden h-full min-h-[100px]'>
            {/* <img className="absolute left-0 top-0 w-full h-full object-cover" src={LocationIllustration} alt="Illustrations agents publiques | Annuaire entreprise" /> */}
            <Suspense fallback={<div>Loading...</div>}>
                <Map MAPTILER_API_KEY={MAPTILER_API_KEY} etablissementLocation={etablissementLocation} />
            </Suspense>
        </div>
    )
}
