import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";


/** Carousel: displays images and arrows to navigate through them
 * 
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 * 
 * State:
 * - currCardIdx: integer for current card index
 * 
 * App --> Carousel --> Card
 */
 function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);

  const currCard = photos[currCardIdx];
  const total = photos.length;
  

  //Increments currCardIdx state by 1
  function goForward() {
    setCurrCardIdx(currCardIdx + 1);
  }
   
   return (
    <div className="Carousel">
      <h2>{title}</h2>
      <div className="Carousel-main">
        <button
          data-testid="left-arrow"
          onClick={() => setCurrCardIdx(currCardIdx - 1)}
          disabled={currCardIdx === 0}
        >
          Left
        </button>
        <Card caption={currCard.caption} src={currCard.src} />
        <button
          data-testid="right-arrow"
          onClick={goForward}
          disabled={currCardIdx === total - 1}
        >
          Right
        </button>
      </div>
      <p>
        {currCardIdx + 1} of {total}
      </p>
     </div>
   );
 }
  
  export default Carousel;