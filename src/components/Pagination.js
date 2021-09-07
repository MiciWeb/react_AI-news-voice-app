import React from 'react'
import { Fab, Box, Button } from '@material-ui/core';
import {BiLeftArrowCircle} from "react-icons/bi";
import {BiRightArrowCircle} from "react-icons/bi";
const Pagination = ({ less, plus, articlesPerPage, totalArticles, currentPage }) => {
    const pageNumbers = []
    const hrefStyle = {
        textDecoration: "none",
        margin: "0 5px",
    }
    const arrowStyle = {
        color: "#d500f9",
        transform: "scale(2.3)"
    };
    for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div>
            <Box display="flex" container alignItems="center" flexDirection="column">
                <div>
                    <a href="#" onClick={() => less()}>
                        <BiLeftArrowCircle style={arrowStyle} />
                    </a>
                    <Button style={{ color: "#d500f9" }}>{currentPage} / {pageNumbers.length}</Button>
                    <a href="#" onClick={() => plus(pageNumbers)}>
                        <BiRightArrowCircle style={arrowStyle} />
                    </a>
                </div>
            </Box>
        </div>
    )
}

export default Pagination
