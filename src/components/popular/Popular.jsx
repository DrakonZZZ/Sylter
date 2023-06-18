import { AiFillPlayCircle, AiOutlineInfoCircle } from 'react-icons/ai';
import './popular.css';

const Popular = ({ type }) => {
  return (
    <>
      <div className="popular-container">
        {type && (
          <div className="category">
            <span>{type === 'movie' ? 'Movies' : 'Series'}</span>
            <select name="genre" id="genre">
              <option>Genre</option>
              <option value="psychological">Psychological</option>
              <option value="Slashers">Slasher</option>
              <option value="thriller">Thriller</option>
              <option value="documentary">Documentary</option>
              <option value="cam">Cam</option>
              <option value="zombie">Zombie</option>
              <option value="monster">Monster</option>
              <option value="Splatter">Splatter</option>
              <option value="Haunted">Haunted</option>
              <option value="Vampire">Vampire</option>
            </select>
          </div>
        )}
        <div className="img-container">
          <div className="overlay"></div>
          <img src="https://images6.alphacoders.com/129/1290892.jpg" alt="" />
          <div className="details">
            <h1 className="title">Knock on the woods</h1>
            <span className="desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias inventore et esse ratione eaque odio quo necessitatibus,
              molestiae vitae veritatis beatae ab facilis voluptates deserunt in
              quae, iste, adipisci consequuntur.
            </span>
            <div className="buttons">
              <button>
                <AiFillPlayCircle className="play" />
              </button>
              <button>
                <AiOutlineInfoCircle className="info" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popular;
