import React from 'react'
import { Fab, Grid, Button } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
const Pagination = ({ less, plus, articlesPerPage, totalArticles, paginate, currentPage }) => {
    const pageNumbers = []
    const hrefStyle = {
        textDecoration: "none",
        margin: "0 5px",
    }
    const arrowStyle = {
        color: "#d500f9"
    };

    for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div>
            <Grid container justify="center">
                <a href="#" onClick={() => less()}>
                    <ArrowBackIosIcon style={arrowStyle} />
                </a>
                <Button style={{color: "#d500f9"}}>{currentPage} / {pageNumbers.length}</Button>
                <a href="#" onClick={() => plus(pageNumbers)}>
                    <ArrowForwardIosIcon style={arrowStyle} />
                </a>
                {pageNumbers.map(number => {
                    return (
                        <>
                            <a style={hrefStyle} key={number} onClick={() => paginate(number)} href="#">
                                <Fab color="primary" size="small">
                                    {number}
                                </Fab>
                            </a>
                        </>
                    )
                })}
            </Grid>
        </div>
    )
}

export default Pagination
