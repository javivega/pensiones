import React, { useEffect, useState } from "react";
import NewsCard from "./Card";
import Stepper from "./Stepper";
import "./NewsRoom.css";

function NewsRoom({ News }) {
    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            
            setTimeout(() => {
                setStartIndex((prevIndex) => (prevIndex + 1) % News.length);
            }, 300);            
        }, 5000);

        return () => clearInterval(interval);
    }, [News.length]);

    const visibleNews = [
        News[startIndex % News.length],
        News[(startIndex + 1) % News.length], // Activo
        News[(startIndex + 2) % News.length]
    ];

    return (
        <div className="news-room-container">
            <Stepper length={News.length} activeIndex={startIndex} />

            <section className="news-room">
                {visibleNews.map((item, index) => (
                    <NewsCard 
                        key={index} 
                        {...item} 
                        status={index === 1}
                    />
                ))}
            </section>
        </div>
    );
}

export default NewsRoom;
