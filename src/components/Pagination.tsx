// REACT IMPORTS
import { useState } from "react";

// ICON IMPORTS
import PrevIcon from '../assets/icons/prevPage.svg?react'
import NextIcon from '../assets/icons/nextPage.svg?react'


// This component handles client side pagination.


interface PaginationProps {
    totalItems: number;
    itemsPerPage: number;
    onPageChange: (page: number) => void;
    onItemsPerPageChange: (itemsPerPage: number) => void;
}


const Pagination: React.FC<PaginationProps> = ({ totalItems, itemsPerPage, onPageChange, onItemsPerPageChange, }) => {

    // initialize currentPage number to 1
    const [currentPage, setCurrentPage] = useState(1);

    // calculate total number of pages based on selected itemsPerPage
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // update currentPage number when there is a page change
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        onPageChange(page);                     // Notify parent component
    };

    // reset currentPage number to 1 when itemsPerPage changes 
    const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = parseInt(e.target.value);
        setCurrentPage(1);
        onItemsPerPageChange(value);            // Notify parent component
    };



    return (
        <div className="pagination-container">

            {/* Items Per Page Dropdown */}
            <div className="items-per-page">
                <p>Showing</p>
                <select id="itemsPerPage" value={itemsPerPage} onChange={handleItemsPerPageChange}>
                
                    {/* loop through the itemsPerPage options and add them to the dropdown */}
                    {[10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((num) => (
                        <option key={num} value={num}>
                        {num}
                        </option>
                    ))}

                </select>
                <p>out of {totalItems}</p>
            </div>

            {/* Page Navigation controls */}
            <div className="page-navigation">

                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                    <PrevIcon />
                </button>

                <p> Page <span>{currentPage}</span> of {totalPages} </p>

                <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                    <NextIcon />
                </button>
                
            </div>

        </div>
  );
};

export default Pagination;
