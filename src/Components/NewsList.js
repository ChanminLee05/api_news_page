import React, {useState, useEffect} from "react";
import NewsItem from "./NewsItem";
import './NewsList.css';

export default function NewsList() {
    const API_KEY = 'fc2727772aa543dfa9581122c2fe7e9e'
    const [articles, setArticles] = useState([]);
    const [articlesToShow, setArticlesToShow] = useState(7);

    useEffect(() => {
        const teslaUrl = 'https://newsapi.org/v2/everything?q=apple&from=2024-02-01&to=2024-02-01&sortBy=popularity&apiKey='
        const getArticles = async (url) => {
            try {
                const response = await fetch(url + API_KEY);
                const data = await response.json();
                setArticles(data.articles);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        getArticles(teslaUrl);
    }, []);

    const handleAppleClick = async () => {
        const appleUrl = 'https://newsapi.org/v2/everything?q=apple&from=2024-02-21&to=2024-02-21&sortBy=popularity&apiKey=';
        try {
            const response = await fetch(appleUrl + API_KEY);
            const data = await response.json();
            setArticles(data.articles);
            setArticlesToShow(7);
        } catch (error) {
            console.error("Error fetching Apple news:", error);
        }
    };

    const handleTeslaClick = async () => {
        const teslaUrl = 'https://newsapi.org/v2/everything?q=apple&from=2024-02-01&to=2024-02-01&sortBy=popularity&apiKey='
        try {
            const response = await fetch(teslaUrl + API_KEY);
            const data = await response.json();
            setArticles(data.articles);
            setArticlesToShow(7);
        } catch (error) {
            console.error("Error fetching Tesla news:", error);
        }
    };

    const handleBusinessClick = async () => {
        const businessUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey='
        try {
            const response = await fetch(businessUrl + API_KEY);
            const data = await response.json();
            setArticles(data.articles);
            setArticlesToShow(7);
        } catch (error) {
            console.error("Error fetching Tesla news:", error);
        }
    };

    const handleTechClick = async () => {
        const techUrl = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='
        try {
            const response = await fetch(techUrl + API_KEY);
            const data = await response.json();
            setArticles(data.articles);
            setArticlesToShow(7);
        } catch (error) {
            console.error("Error fetching Tesla news:", error);
        }
    };

    const handleWallStreetClick = async () => {
        const wallStreetUrl = 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey='
        try {
            const response = await fetch(wallStreetUrl + API_KEY);
            const data = await response.json();
            setArticles(data.articles);
            setArticlesToShow(7);
        } catch (error) {
            console.error("Error fetching Tesla news:", error);
        }
    };

    const handleMoreClick = () => {
        setArticlesToShow((prev) => prev + 10);
    };

    return (
        <>
            <div className="navbtn btn-group align-items-center" role="group" aria-label="Button group with nested dropdown">
                <button type="button" className="btn btn-dark text-uppercase" onClick={handleAppleClick}>Apple</button>
                <button type="button" className="btn btn-dark text-uppercase" onClick={handleTeslaClick}>Tesla</button>
                <button type="button" className="btn btn-dark text-uppercase" onClick={handleBusinessClick}>Business</button>
                <button type="button" className="btn btn-dark text-uppercase" onClick={handleTechClick}>Technology</button>
                <button type="button" className="btn btn-dark text-uppercase" onClick={handleWallStreetClick}>Wall Street Journal</button>
                <div className="btn-group" role="group">
                    <button type="button" className="btn btn-dark dropdown-toggle text-uppercase" data-bs-toggle="dropdown" aria-expanded="false">
                        More
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Movies</a></li>
                        <li><a className="dropdown-item" href="#">Sports</a></li>
                        <li><a className="dropdown-item" href="#">Arts</a></li>
                        <li><a className="dropdown-item" href="#">Entertainment</a></li>
                    </ul>
                </div>
            </div>
            <div className="headNews">
                <div className="latest">
                    <h2 className="fw-bold">Latest News</h2>
                </div>
                <div className="recentNews">
                    {articles.length > 0 && (
                        <div className="firstNews">
                            <a href={articles[0].url} target="_blank" rel="noreferrer">
                                <img className="firstNewsImg" src={articles[0].urlToImage} alt={articles[0].title}/>
                            </a>
                            <a href={articles[0].url} target="_blank" rel="noreferrer">
                                <h2 className="firstNewsTitle">{articles[0].title}</h2>
                            </a>
                            <p className="firstNewsDesc">{articles[0].description}</p>
                        </div>
                    )}
                    {articles.length > 1 && (
                        <div className="secondNews">
                            <a href={articles[1].url} target="_blank" rel="noreferrer">
                                <img className="secondNewsImg" src={articles[1].urlToImage} alt={articles[1].title}/>
                            </a>
                            <a href={articles[1].url} target="_blank" rel="noreferrer">
                                <h2 className="secondNewsTitle">{articles[1].title}</h2>
                            </a>
                            <p className="secondNewsDesc">{articles[1].description}</p>
                        </div>
                    )}
                </div>
            </div>
            <div className="line-break"></div>
            <div className="bottomNews">
                <div className="gridNews container">
                    <div className="rowArt row">
                        {articles.slice(2, articlesToShow).map((article, index) => (
                            <div key={article.url} className="colArt col">
                                <NewsItem
                                    title={article.title}
                                    description={article.description}
                                    url={article.url}
                                    urlToImage={article.urlToImage}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {articles.length > articlesToShow && (
                <div className="col-10 p-3">
                    <button type="button" className="loadbtn btn btn-dark" onClick={handleMoreClick}>
                        Load More
                    </button>
                </div>
            )}
        </>
    );
}
