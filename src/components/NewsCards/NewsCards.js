import React from 'react'
import NewsCard from "../NewsCard/NewsCard"
import { Button, Grid, Grow, Typography } from "@material-ui/core"
import useStyles from "./styles.js"

const NewsCards = ({ articles }) => {
    const classes = useStyles()

    return (
        <Grow in>
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {articles.map((article, i) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
                        <NewsCard article={article} i={i} />
                    </Grid>
                ))}
                {/* {names.map(name => (
                    <li>
                        <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
                            <h1>{name}</h1>
                        </Grid>
                    </li>
                ))} */}
            </Grid>
        </Grow>

    )
}

export default NewsCards
