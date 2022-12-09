import React from "react";

import "../css/Card.css";

const Cards = ({ Data }) => (
  <section className="card-list">
    {Data.map((item, index) => {
      return (
        <article key={index} className={item.cName}>
          <a href={item.linkHref}>
            <header className="card-header">
              <p>{item.date}</p>
              <h2>{item.header}</h2>
            </header>
            {item.img}
          </a>
        </article>
      );
    })}
  </section>
);

export default Cards;
