import React from 'react'
import './NewsItem.css'

const NewsItem = ({title, url, urlToImage}) => {

    return (
        <div className="container">
            <div className="news-item">
                <img className="news-img" src={urlToImage} alt={urlToImage}/>
                <h3><a href={url}>{title}</a></h3>
            </div>
        </div>
    )
}

export default NewsItem;