import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from 'react-icons/bs';
import ListData from '../specificList/ListData';
import './list.css';

const List = () => {
  return (
    <div className="movie-list">
      <span className="list-title">
        Movies that are being watched<span className="space-color">...</span>
      </span>
      <div className="slider">
        <BsFillArrowLeftCircleFill className="slider-arrow left" />
        <BsFillArrowRightCircleFill className="slider-arrow right" />
        <div className="container">
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
          <ListData />
          <ListData />
        </div>
      </div>
    </div>
  );
};

export default List;
