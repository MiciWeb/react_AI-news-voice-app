import React, { useState, useEffect } from 'react'
import alanBtn from "@alan-ai/alan-sdk-web"
import NewsCards from "./components/NewsCards/NewsCards"
import Pagination from "./components/Pagination"

const App = () => {
    const [articles, setNewsArticles] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [articlesPerPage] = useState(4)
    const alanKey = process.env.REACT_APP_ALAN_API_KEY

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

    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

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
            <h1 style={{ color: "#FAFAFA", textAlign: "center" }}>Alan AI News App </h1>
            {articles.length ? <Pagination currentPage={currentPage} less={less} plus={plus} articlesPerPage={articlesPerPage} totalArticles={articles.length} /> : ""}
            <NewsCards articles={currentArticles} />
        </div>
    )
}

export default App
