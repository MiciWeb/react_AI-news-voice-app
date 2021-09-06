import React, { useState, useEffect } from 'react'
import alanBtn from "@alan-ai/alan-sdk-web"
import NewsCards from "./components/NewsCards/NewsCards"
import { Grid, Grow, Typography } from "@material-ui/core"
import api from "./api.json"
import Pagination from "./components/Pagination"
// const alanKey = process.env.REACT_APP_ALAN_API_KEY
//const newsKey = process.env.REACT_APP_NEWS_API_KEY


const App = () => {
    const [newsArticles, setNewsArticles] = useState([])
    const [currentPage, setCurrentPage] = useState(2)
    const [articlesPerPage, setArticlesPerPage] = useState(4)

    // useEffect(() => {
    //     alanBtn({
    //         key: alanKey,
    //         onCommand: ({ command, articles }) => {
    //             if (command === 'newHeadlines') {
    //                 setNewsArticles(articles)
    //             }
    //         }
    //     })
    // }, [])

    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = api.slice(indexOfFirstArticle, indexOfLastArticle);

    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    
    return (
        <div>
            <h1>Alan AI News Application</h1>
            {console.log(currentArticles)}
            <Pagination articlesPerPage={articlesPerPage} totalArticles={api.length} paginate={paginate} />
            <NewsCards articles={currentArticles} />
        </div>
    )
}

export default App
