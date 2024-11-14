import { Link, useLocation } from '@remix-run/react'
import { Button } from '../ui/button'

import { ArrowUpRight } from 'lucide-react'
import Logo from './Logo'
import SearchModal from '../search/components/search-modal'

export default function Header() {

    const location = useLocation();
    const isIndex = location.pathname === '/'

    return (
        <header className="flex flex-col gap-4bg-white w-full">
            <div className='container w-full flex justify-between items-center py-4 gap-8'>
                <Link to="/">
                    <Logo />
                </Link>
                <div className='hidden md:flex'>{!isIndex && <SearchModal />}</div>
                <div>
                    <Link to="/se-connecter">
                        <Button>
                            Agent public
                            <ArrowUpRight className='w-4 h-4' />
                        </Button>
                    </Link>
                </div>
            </div>
            {!isIndex &&
                <div className='md:hidden px-4 pb-4'>
                    <SearchModal />
                </div>
            }
        </header>
    )
}
