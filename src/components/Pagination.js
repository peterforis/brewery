import React from "react";
import { Link } from "react-router-dom";

function Pagination({ itemsPerPage, totalItems, paginate }) {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            {pageNumbers.map(number => (
                <Link to={`/breweries/${number}`} className="pagination-link" key={number} onClick={() => paginate(number)}>{number}</Link>
            ))}
        </div>
    )
}

export default Pagination;