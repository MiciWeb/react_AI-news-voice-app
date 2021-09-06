import React from 'react'

const Pagination = ({ articlesPerPage, totalArticles, paginate }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul>
                {pageNumbers.map(number => {
                    return (
                        <li key={number}>
                            <a onClick={() => paginate(number)} href="!#">
                                {number}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Pagination
