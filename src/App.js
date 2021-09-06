import React, { useState, useEffect } from 'react'
import alanBtn from "@alan-ai/alan-sdk-web"
import NewsCards from "./components/NewsCards/NewsCards"
import { Grid, Grow, Typography } from "@material-ui/core"
import api from "./api.json"
const alanKey = process.env.REACT_APP_ALAN_API_KEY
//const newsKey = process.env.REACT_APP_NEWS_API_KEY


const App = () => {

    const [newsArticles, setNewsArticles] = useState([])

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles }) => {
                if (command === 'newHeadlines') {
                    setNewsArticles(articles)
                }
            }
        })
    }, [])

    return (
        <div>
            <h1>Alan AI News Application</h1>
            <NewsCards articles={api} />
        </div>
    )
}

export default App
