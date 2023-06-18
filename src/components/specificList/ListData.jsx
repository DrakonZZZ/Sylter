import { AiFillPlayCircle, AiOutlineStar } from 'react-icons/ai';
import { BiMessageSquareAdd } from 'react-icons/bi';
import './ListData.css';

const ListData = () => {
  return (
    <div className="listData">
      <img src="https://i.ytimg.com/vi/yKdVYUXyBzU/maxresdefault.jpg" alt="" />
      <div className="item-info">
        <AiFillPlayCircle />
        <BiMessageSquareAdd />
        <AiOutlineStar />
      </div>
      <div className="item-info-selected">
        <span>1 hour 54mins</span>
        <span>2022</span>
      </div>
      <div className="plot">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
        facilis nam veniam perspiciatis fugit, commodi quo doloribus, hic id
      </div>
      <div className="genre">Thriller</div>
    </div>
  );
};

export default ListData;
