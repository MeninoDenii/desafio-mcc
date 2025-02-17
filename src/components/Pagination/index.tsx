import Button from "../Button";
import { PageButton, PaginationContainer } from "./StyledPagination";

interface iPagination {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<iPagination> = ({
  currentPage,
  onPageChange,
  totalPages,
}) => {
  const handlePageClick = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = startPage + maxPagesToShow - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <PageButton
          key={i}
          onClick={() => handlePageClick(i)}
          active={i === currentPage}
        >
          {i}
        </PageButton>
      );
    }

    return pages;
  };

  return (
    <PaginationContainer>
      <Button
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
        heigth="40px"
      >
        Anterior
      </Button>
      {renderPageNumbers()}
      <Button
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        heigth="40px"
      >
        Próximo
      </Button>
    </PaginationContainer>
  );
};

export default Pagination;
