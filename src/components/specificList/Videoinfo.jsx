import { AiFillPlayCircle, AiOutlineStar } from 'react-icons/ai';
import { BiMessageSquareAdd } from 'react-icons/bi';

const Videoinfo = () => {
  const clip = `https://imdb-video.media-imdb.com/vi1586869529/1434659607842-pgv4ql-1452889095960.mp4?Expires=1687247213&Signature=PNaleYlgDInAfVxNyR68akr6zBxBV19kNIEAtGLWSjXtlnG139wEdK8n9BKwMtaJ1WDi~51SiGv7NALw3mQKOywR2abn7PEvt4vgedRYFZfjqwY3RmWJV20eUAh7TIqsouzlwj5s61ftDhMapzasEC3WnmmB3qlX~iumeAWhhKw78~7jm3X5SYsxCLlsSO-rfAMOdOEdNyMPVIStl3YyAKBSXCYookr5DQwz8nQW2~fx6b7LN7AkQKb0D5dqdjcpGb2Mq27irbN6EwFP~cJIjn7ffR5ME4XUj5DMXccSDkmD2RONzOwgeokk3EY4uudhmuU7BERF33WhxrLh~-~LMw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA`;
  return (
    <>
      <video src={clip} autoPlay={true} loop />
      <div className="thumbnail-info">
        <div className="plot">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
          eum. Neque nisi qui eum recusandae laudantium non, optio nam, ducimus
          sapiente id atque quia in accusantium sint amet maiores enim.
        </div>
        <div className="item-info-selected">
          <span>
            2022 <span className="genre">Thriller</span>
          </span>
        </div>

        <div className="thumbnail-play">
          <span className="duration">1 hour 54mins</span>
          <div>
            <div className="item-info">
              <BiMessageSquareAdd className="icon" />
              <AiOutlineStar className="icon" />
              <AiFillPlayCircle className="thumbnail-play-icon " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Videoinfo;
