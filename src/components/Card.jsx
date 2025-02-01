import React from "react"
import "./Card.css"
import ArrowRight from "../icons/arrow-right.svg"


function NewsCard({pressTitle, year, title, status}) {

    return (
        <article className={`newscard--card ${status ? 'active' : ''}`}>
            <aside className="newscard--pressinfo">
                <small>
                    {pressTitle} · {year}
                </small>
                <div className="newscard--icon-container">
                    <img src={ArrowRight} alt="arrow right" />
                </div>
            </aside>
            <p>{title}</p>
        </article>
    )
}



export default NewsCard;