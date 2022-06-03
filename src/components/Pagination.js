import React, { useEffect } from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
    
    const pageNumbers = [];

    for( let i=1; i<= Math.ceil(totalPosts/postsPerPage); i++ ) {
        pageNumbers.push(i);
    }

    return(
        <nav>
            <ul className="pagination">
                <a class="page-link" href="#" aria-label="Previous" onClick={()=> paginate(currentPage -1)}>
                <span aria-hidden="true">«</span>
                </a>
                { pageNumbers.map((number)=>(
                <li key={number} className="page-item">
                    <a onClick={()=> paginate(number)} href="!#" className="page-link">
                        {number}
                    </a>
                </li>
            )) }
            <a class="page-link" href="#" aria-label="Next" onClick={()=> paginate(currentPage + 1)}>
            <span aria-hidden="true">»</span>
            </a>
            </ul>
        </nav>
    );
}


export default Pagination;