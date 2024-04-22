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
        <div className="flex justify-center item-center py-4 p-2 gap-4 text-color-primary text-2xl">
            { currentPage <= 1 ? null :
                <button onClick={handlePrevPage} className="transition-all hover:text-color-accent">prev</button>
            }

            <p>{currentPage} of {lastVisiblePage}</p>

            { currentPage >= lastVisiblePage ? null :
            <button onClick={handleNextPage} className="transition-all hover:text-color-accent">next</button>
            }
        </div>
    )
}
export default Pagination