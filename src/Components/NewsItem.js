import React from 'react'
import './NewsItem.css'

const NewsItem = ({title, url, urlToImage}) => {

    return (
        <>
            <div className="news-item">
                <img className="news-img" src={urlToImage} alt={urlToImage}/>
                <h3 className="news-title"><a className="news-link" href={url}>{title}</a></h3>
            </div>
        </>
    )
}

export default NewsItem;