import React from 'react';

interface PaginationProps {
  page: number;
  totalPages?: number;
  onPageChange: (newPage: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  page,
  onPageChange,
  totalPages,
}) => {
  const handlePrevPage = (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    evt.preventDefault();
    evt.stopPropagation();

    if (page > 1) {
      onPageChange(page - 1);
    }
  };

  const handleNextPage = (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    evt.preventDefault();
    evt.stopPropagation();

    if (totalPages && page < totalPages) {
      onPageChange(page + 1);
    }
  };

  return (
    <div className="flex justify-center items-center gap-3 pt-5">
      <span
        className="text-white cursor-pointer underline hover:no-underline"
        onClick={() => onPageChange(1)}
      >
        first page
      </span>
      <button
        className="text-white p-2 rounded-full border-solid border-white border-2 hover:bg-white hover:text-black disabled:opacity-75 transition-all duration-200"
        disabled={page === 1}
        onClick={(e) => handlePrevPage(e)}
      >
        prev
      </button>
      <span className="text-white">
        page {page} of {totalPages}
      </span>
      <button
        className="text-white p-2 rounded-full border-solid border-white border-2 hover:bg-white hover:text-black disabled:opacity-75 transition-all duration-200"
        disabled={page === totalPages}
        onClick={(e) => handleNextPage(e)}
      >
        next
      </button>
      <span
        className="text-white cursor-pointer underline hover:no-underline"
        onClick={() => totalPages && onPageChange(totalPages)}
      >
        last page
      </span>
    </div>
  );
};
