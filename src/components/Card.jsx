import React from "react"
import "./Card.css"
import ArrowRight from "../icons/arrow-right.svg"

const status = 

function NewsCard({pressTitle, year, title, status="inactive"}) {
    return (
        <article className={`newscard--card ${status}`}>
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