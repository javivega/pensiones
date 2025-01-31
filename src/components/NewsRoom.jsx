import React from 'react';
import { useState } from "react";
import NewsCard from "./Card";
import "./NewsRoom.css";

function NewsRoom({ News }) {

    const [isActive, setIsActive] = useState(false);

    

    return (
        <div className="news-room">
            <section className="news-room">
                {News.map((item, index) => (
                    <NewsCard key={index} {...item} />
                ))}
            </section>
        </div>
    );
}

export default NewsRoom;
