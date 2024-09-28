import  { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';

const PaginationComponent = () => {
  const [activePage, setActivePage] = useState(1);
  const totalPages = 20;

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setActivePage(pageNumber);
    }
  };

  return (
    <Pagination>
      <Pagination.Prev
        onClick={() => handlePageChange(activePage - 1)}
        disabled={activePage === 1}
      />
      
      {[...Array(totalPages)].map((_, index) => {
        const page = index + 1;
        return (
          <Pagination.Item
            key={page}
            active={page === activePage}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </Pagination.Item>
        );
      })}

      <Pagination.Next
        onClick={() => handlePageChange(activePage + 1)}
        disabled={activePage === totalPages}
      />
    </Pagination>
  );
};

export default PaginationComponent;
