import { useState } from 'react';
import Videoinfo from './Videoinfo';
import './ListData.css';

const ListData = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="listData"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src="https://i.ytimg.com/vi/yKdVYUXyBzU/maxresdefault.jpg" alt="" />
      {isHovered && <Videoinfo />}
    </div>
  );
};

export default ListData;
