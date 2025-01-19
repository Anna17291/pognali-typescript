import React from 'react';
import styles from './CustomPagination.module.scss';

type CustomPaginationProps = {
  totalPages: number;
  onPageClick: (value: number) => void;
  currentPage: number;
  onNextClick: () => void;
  onPrevClick: () => void;
};

const CustomPagination = ({
  totalPages,
  onPageClick,
  currentPage,
  onNextClick,
  onPrevClick,
}: CustomPaginationProps) => {
  const onPageNumberClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    if (!(evt.target instanceof HTMLButtonElement) || !evt.target) {
      return;
    }
    onPageClick(Number(evt.target.dataset.page));
  };

  return (
    <div className={styles.pagination}>
      <div className={styles.pageNumbers}>
        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;
          return (
            <button
              key={page}
              data-page={page}
              className={`${styles.pageButton} ${
                page === currentPage ? styles.active : ''
              }`}
              onClick={onPageNumberClick}
            >
              {page}
            </button>
          );
        })}
      </div>

      <div className={styles.navigationButtons}>
        <button
          className={styles.arrowButton}
          onClick={onPrevClick}
          disabled={currentPage === 1}
        >
          <span className={styles.arrowLeft} />
        </button>

        <button
          className={styles.arrowButton}
          onClick={onNextClick}
          disabled={currentPage === totalPages}
        >
          <span className={styles.arrowRight} />
        </button>
      </div>
    </div>
  );
};

export default CustomPagination;
