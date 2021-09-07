import React from 'react'
import { Fab, Grid, Button } from '@material-ui/core';

const Pagination = ({ less, plus, articlesPerPage, totalArticles, paginate }) => {
    const pageNumbers = []
    const hrefStyle = {
        textDecoration: "none",
        margin: "0 5px"
    };

    for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div>
            <Grid container justify="center">
                <a href="!#" onClick={() => less()}>
                    <Button>
                        Avant
                    </Button>
                </a>
                {pageNumbers.map(number => {
                    return (
                        <>
                            <a style={hrefStyle} key={number} onClick={() => paginate(number)} href="!#">
                                <Fab color="primary" size="small">
                                    {number}
                                </Fab>
                            </a>
                        </>
                    )
                })}
                <a href="!#" onClick={() => plus(pageNumbers)}>
                    <Button>
                        Apres
                    </Button>
                </a>
            </Grid>
        </div>
    )
}

export default Pagination
