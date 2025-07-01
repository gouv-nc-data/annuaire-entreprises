// eslint-disable-next-line import/no-unresolved
import IseeLogo from '/isee-logo-white.png'
import { Link } from "@remix-run/react";
import { IUniteLegale } from "~/domain/entity/unite-legale";

import { Building } from 'lucide-react';
import UniteLegaleEtablissement from './unite-legale-etablissement';
import UniteLegaleEtablissementsListHeader from './unite-legale-etablissements-list-header';

export default function UniteLegaleEtablissements({ uniteLegale }: { uniteLegale: IUniteLegale }) {

    const etablissements = uniteLegale.etablissements as IUniteLegale['etablissements']
    const openedEtablissements = []
    const closedEtablissements = []

    for (const etablissement of etablissements) {
        etablissement.situation?.toLowerCase().includes('radié')
            ? closedEtablissements.push(etablissement)
            : openedEtablissements.push(etablissement)
    }

    return (
        <section className='flex flex-col gap-4' id='etablissements'>
            <span className='text-common'>Cette structure possède {etablissements.length} {etablissements.length > 1 ? 'établissements' : 'établissement'}. Cliquez sur un n° RIDET pour obtenir plus d’information :</span>
            <div className='flex flex-col gap-6 p-4 md:p-6 bg-white rounded-xl shadow-sm border border-input'>
                <header className='flex w-full justify-between items-start gap-6'>
                    <h2 className='text-blue-dinum  font-normal text-xl'>{etablissements.length} {etablissements.length > 1 ? 'établissements' : 'établissement'} de {uniteLegale.nom_complet}</h2>
                </header>
                <div className='flex flex-col gap-8' id='opened-etablissements'>
                    {openedEtablissements && openedEtablissements.length > 0 &&
                        <div className='flex flex-col gap-6 items-start w-full'>
                            <span className='flex items-center gap-2 text-zinc-900 font-normal text-lg border-b-2 border-blue-dinum pb-1'>
                                <Building className='w-5 h-5 text-blue-dinum' />
                                Établissements en activité
                            </span>
                            <div className='flex flex-col gap-6 w-full'>
                                <UniteLegaleEtablissementsListHeader />
                                <div className='flex flex-col gap-2 w-full'>
                                    {
                                        openedEtablissements.map(etablissement => <UniteLegaleEtablissement key={etablissement.ridet} etablissement={etablissement} />)
                                    }
                                </div>
                            </div>
                        </div>
                    }
                    {
                        closedEtablissements && closedEtablissements.length > 0 &&
                        openedEtablissements && openedEtablissements.length > 0 &&
                        <hr />
                    }
                    {closedEtablissements && closedEtablissements.length > 0 &&
                        <div className='flex flex-col gap-6 items-start w-full' id='closed-etablissements'>
                            <span className='flex items-center gap-2 text-zinc-900 font-normal text-lg border-b-2 border-red-300 pb-1'>
                                <Building className='w-5 h-5 text-red-400' />
                                Établissements fermés
                            </span>
                            <div className='flex flex-col gap-6 w-full'>
                                <UniteLegaleEtablissementsListHeader />
                                <div className='flex flex-col gap-2 w-full'>
                                    {
                                        closedEtablissements.map(etablissement => <UniteLegaleEtablissement key={etablissement.ridet} etablissement={etablissement} />)
                                    }
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </section >
    )
}
