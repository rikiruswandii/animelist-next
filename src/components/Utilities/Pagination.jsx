const Pagination = ({ currentPage, lastVisiblePage, setPage }) => {
    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }

    const handleNextPage = () => {
        setPage((prevState) => prevState + 1 )
        scrollTop()
    }

   const handlePrevPage = () => {
        setPage((prevState) => prevState - 1 )
        scrollTop()
    }

    return (
      <div className="flex justify-center item-center py-4 p-2 gap-4  text-xl">
        {currentPage <= 1 ? null : (
          <button
            onClick={handlePrevPage}
            className="text-color-primary transition-all hover:font-bold bg-color-accent rounded px-2"
          >
            {"<"}
          </button>
        )}

        <p className="text-color-secondary">
          {currentPage} of {lastVisiblePage}
        </p>

        {currentPage >= lastVisiblePage ? null : (
          <button
            onClick={handleNextPage}
            className="text-color-primary transition-all hover:font-bold bg-color-accent rounded px-2"
          >
            {">"}
          </button>
        )}
      </div>
    );
}
export default Pagination