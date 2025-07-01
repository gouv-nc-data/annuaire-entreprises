import { useSearchParams } from "@remix-run/react";
import { SearchResults } from "~/domain/entity/search-results";

import { ChevronsLeft, ChevronLeft, ChevronsRight, ChevronRight } from "lucide-react";

import {
    PaginationContent,
    PaginationItem,
    PaginationLink,
} from "~/presentation/ui/pagination"


export default function SearchPagination({ searchResults }: { searchResults: SearchResults }) {

    const [searchParams] = useSearchParams();
    const currentPage = parseInt(searchParams.get('page') ?? "1")
    const totalPages = searchResults.total_pages

    function createPaginationLink(toPage: number) {
        const newSearchParams = new URLSearchParams(searchParams.toString())
        newSearchParams.set('page', JSON.stringify(toPage))

        return `rechercher?${newSearchParams.toString()}`
    }

    return (
        totalPages > 1 ? (
            <PaginationContent className="flex items w-full items-center justify-center max-w-xs sm:max-w-full overflow-x-auto sm:overflow-auto mt-4">
                <PaginationItem>
                    <PaginationLink className={`${currentPage === 1 ? 'opacity-30 pointer-events-none' : ''}`} href={createPaginationLink(1)}><ChevronsLeft /></PaginationLink>
                </PaginationItem>
                <PaginationItem >
                    <PaginationLink className={`${currentPage === 1 ? 'opacity-30 pointer-events-none' : ''}`} href={createPaginationLink(currentPage - 1 > 0 ? currentPage - 1 : 1)}><ChevronLeft /></PaginationLink>
                </PaginationItem>
                {
                    Array.from(Array(totalPages).keys()).slice(currentPage - 5 > 0 ? currentPage - 5 : 0, currentPage - 1).map((item) => (
                        <PaginationItem key={item + 1}>
                            <PaginationLink
                                href={createPaginationLink(item + 1)}>
                                {item + 1}
                            </PaginationLink>
                        </PaginationItem>
                    ))
                }
                <PaginationItem key={currentPage}>
                    <PaginationLink
                        isActive={true}
                        href={createPaginationLink(currentPage)}>
                        {currentPage}
                    </PaginationLink>
                </PaginationItem>
                {
                    Array.from(Array(totalPages).keys()).slice(currentPage, currentPage + 5 < totalPages ? currentPage + 5 : totalPages).map((item) => (
                        <PaginationItem key={item + 1}>
                            <PaginationLink
                                href={createPaginationLink(item + 1)}>
                                {item + 1}
                            </PaginationLink>
                        </PaginationItem>
                    ))
                }
                <PaginationItem>
                    <PaginationLink className={`${currentPage === totalPages ? 'opacity-30 pointer-events-none' : ''}`} href={createPaginationLink(currentPage + 1 < totalPages ? currentPage + 1 : totalPages)}><ChevronRight /></PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink className={`${currentPage === totalPages ? 'opacity-30 pointer-events-none' : ''}`} href={createPaginationLink(totalPages)}><ChevronsRight /></PaginationLink>
                </PaginationItem>
            </PaginationContent>
        ) : <div className="h-10"></div>
    )
}
