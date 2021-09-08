import React from 'react'
import NewsCard from "../NewsCard/NewsCard"
import { Grid, Grow, Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import useStyles from "./styles.js"

const infoCards = [
    { height: 340, color: '#1565c0', title: 'News by Categories', info: 'Business, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
    { height: 370, color: '#283593', title: 'Latest News', text: 'Give me the latest news' },
    { height: 340, color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
]

const NewsCards = ({ articles }) => {
    const classes = useStyles()

    if (!articles.length) {
        return (
            <Grow in>
                <Grid className={classes.container} container justifyContent="space-evenly" alignItems="center" spacing={3}>
                    {infoCards.map(infoCard => {
                        return (
                            <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
                                <div className={classes.card} style={{ backgroundColor: infoCard.color,  height: infoCard.height }}>
                                    <Typography variant="h5" >{infoCard.title}</Typography>
                                    {infoCard.info ?
                                        <Typography variant="h6"> <strong> {infoCard.title.split(" ")[2]} </strong> <br /> {infoCard.info} </Typography> : null}
                                    <Typography variant="subtitle1">Try saying: <br/> <i>{infoCard.text}</i></Typography>
                                </div>
                            </Grid>
                        )
                    })}
                </Grid>
            </Grow>
        )
    }


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
