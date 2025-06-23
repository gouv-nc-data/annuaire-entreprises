import LocationIllustration from '/location.png'

export default function EtablissementLocation() {
    return (
        <div className='relative w-full rounded-xl bg-white shadow-sm flex-1 overflow-hidden h-full min-h-[250px]'>
            <img className="absolute left-0 top-0 w-full h-full object-cover" src={LocationIllustration} alt="Illustrations agents publiques | Annuaire entreprise" />
        </div>
    )
}
