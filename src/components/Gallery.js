import React, { useState } from "react";
import "./Gallery.css";
import img1 from"../components/img1.jpg";
import img2 from"../components/img2.jpg";
import img3 from"../components/img3.jpg";
import img4 from"../components/img4.jpg";
import img5 from"../components/img5.jpg";
import img6 from"../components/img6.jpg";
const images = [
  img1,img2,img3,img4,img5,img6
];

const Gallery = () => {
  const [selected, setSelected] = useState(null);
  const [zoom, setZoom] = useState(1);

  const close = () => {
    setSelected(null);
    setZoom(1);
  };

  const zoomIn = () => setZoom((z) => z + 0.2);
  const zoomOut = () => setZoom((z) => (z > 1 ? z - 0.2 : 1));

  const handleWheel = (e) => {
    if (e.deltaY < 0) zoomIn();
    else zoomOut();
  };

  return (
    <>
      <div className="gallery">
        <h2>Gallery</h2>

        <div className="grid">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="salon"
              onClick={() => setSelected(img)}
            />
          ))}
        </div>
      </div>

      {selected && (
        <div className="overlay" onClick={close}>
          <div className="controls" onClick={(e) => e.stopPropagation()}>
            <button onClick={zoomIn}>＋</button>
            <button onClick={zoomOut}>－</button>
            <button onClick={close}>✕</button>
          </div>

          <img
            src={selected}
            alt="preview"
            style={{ transform: `scale(${zoom})` }}
            onWheel={handleWheel}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default Gallery;