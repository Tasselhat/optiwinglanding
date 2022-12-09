import React from "react";

import "../css/Gallery.css";

const Gallery = ({ Data }) => (
  <section className="gallery">
    {Data.map((item, index) => {
      return (
        <div key={index} className={item.cName}>
          <header className="image-header">
            <p>{item.date}</p>
            <h2>{item.header}</h2>
          </header>
          {item.img}
        </div>
      );
    })}
  </section>
);

export default Gallery;
