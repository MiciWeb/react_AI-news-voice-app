import React from 'react'
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import useStyles from "./styles.js"

const NewsCard = ({ article: { description, publishedAt, source, title, url, urlToImage, author }, activeArticle }) => {
    const classes = useStyles();

    return (
        <Card>
            <CardActionArea style={{ height: 470 }} href={url} target="_blank">
                <CardMedia className={classes.media} style={{ height: 180 }} image={"https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png"} />
                <div className={classes.details}>
                    <Typography variant="body2" color="textSecondary" >{(new Date(publishedAt)).toDateString()}</Typography>
                    <Typography variant="body2" color="textSecondary" >{source.name}</Typography>
                    {/* <Typography variant="body2" color="textSecondary" component="h2">{author}</Typography> */}
                </div>
                <Typography className={classes.title} gutterBottom variant="h6">{title}</Typography>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">{description || "description not available"}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button href={url} target="_blank" size="small" style={{ background: "#35baf6"}}>Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default NewsCard
