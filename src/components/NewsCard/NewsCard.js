import React from 'react'
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

const NewsCard = ({ article: { description, publishedAt, source, title, url, urlToImage, author}, activeArticle }) => {
    return (
        <Card>
            <CardActionArea>
                <CardMedia image={urlToImage || "https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png"} />
                <div>
                    <Typography variant="body2" color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
                    <Typography variant="body2" color="textSecondary" component="h2">{source.name}</Typography>
                    <Typography variant="body2" color="textSecondary" component="h2">{author}</Typography>
                </div>
                <Typography gutterBottom variant="h5">{title}</Typography>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">{description || "description not available" }</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">Learn More</Button>
                {/* <Typography variant="h5" color="textSecondary">{i }</Typography> */}
            </CardActions>
        </Card>
    )
}

export default NewsCard
