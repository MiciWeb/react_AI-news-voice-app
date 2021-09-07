import React, { useState, useEffect } from 'react'
import alanBtn from "@alan-ai/alan-sdk-web"
import NewsCards from "./components/NewsCards/NewsCards"
import { Grid, Grow, Typography } from "@material-ui/core"
import api from "./api.json"
import Pagination from "./components/Pagination"

const App = () => {
    const [newsArticles, setNewsArticles] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
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

    const plus = (pageNumber) => {
        if (currentPage >= pageNumber.length) {
            return currentPage == pageNumber.length
        } else {
            setCurrentPage(currentPage + 1)
        }
    }

    const less = () => {
        if (currentPage <= 1) {
            return currentPage == 1
        } else {
            setCurrentPage(currentPage - 1)
        }
    }

    return (
        <div>
            <h1>Alan AI News Application</h1>
            <NewsCards articles={currentArticles} />
            <Pagination currentPage={currentPage} less={less} plus={plus} articlesPerPage={articlesPerPage} totalArticles={api.length} />
        </div>
    )
}

export default App
