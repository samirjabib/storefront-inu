"use client";
import {
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  Pagination,
  PaginationPrevious,
} from "../common/ui/pagination";

export default function ProductStorePagination() {
  return (
    <div className="mb-12">
      <Pagination>
        <PaginationContent>
          {/* <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem> */}
          <PaginationItem className="border border-gray-200 rounded-lg bg-neutral-50">
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">8</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">10</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
