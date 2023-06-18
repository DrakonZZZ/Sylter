import { useRef, useState } from 'react';
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from 'react-icons/bs';
import ListData from '../specificList/ListData';
import './list.css';

const List = () => {
  const [slideValue, setSlideValue] = useState(0);
  const listRef = useRef();

  const handleClick = (transistion) => {
    let region = listRef.current.getBoundingClientRect().x - 47.9971313477;

    if (transistion === 'transLeft' && slideValue > 0) {
      setSlideValue(slideValue - 1);
      listRef.current.style.transform = `translateX(${441 + region}px)`;
    }

    if (transistion === 'transRight' && slideValue < 8) {
      setSlideValue(slideValue + 1);
      listRef.current.style.transform = `translateX(${-441 + region}px)`;
    }

    console.log(region);
  };
  return (
    <div className="movie-list">
      <span className="list-title">
        Movies that are being watched<span className="space-color">...</span>
      </span>
      <div className="slider">
        <BsFillArrowLeftCircleFill
          className="slider-arrow left"
          onClick={() => handleClick('transLeft')}
        />
        <BsFillArrowRightCircleFill
          className="slider-arrow right"
          onClick={() => handleClick('transRight')}
        />
        <div className="container" ref={listRef}>
          <ListData />
          <ListData />
          <ListData />
          <ListData />
          <ListData />
          <ListData />
          <ListData />
          <ListData />
          <ListData />
          <ListData />
          <ListData />
        </div>
      </div>
    </div>
  );
};

export default List;
