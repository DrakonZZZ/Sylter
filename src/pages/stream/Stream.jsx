import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import './stream.css';

const Stream = () => {
  return (
    <div className="stream">
      <div className="back-btn">
        <BsFillArrowLeftCircleFill />
        Homepage
      </div>
      <video
        autoPlay
        controls
        src="https://imdb-video.media-imdb.com/vi1586869529/1434659607842-pgv4ql-1452889095960.mp4?Expires=1687247213&Signature=PNaleYlgDInAfVxNyR68akr6zBxBV19kNIEAtGLWSjXtlnG139wEdK8n9BKwMtaJ1WDi~51SiGv7NALw3mQKOywR2abn7PEvt4vgedRYFZfjqwY3RmWJV20eUAh7TIqsouzlwj5s61ftDhMapzasEC3WnmmB3qlX~iumeAWhhKw78~7jm3X5SYsxCLlsSO-rfAMOdOEdNyMPVIStl3YyAKBSXCYookr5DQwz8nQW2~fx6b7LN7AkQKb0D5dqdjcpGb2Mq27irbN6EwFP~cJIjn7ffR5ME4XUj5DMXccSDkmD2RONzOwgeokk3EY4uudhmuU7BERF33WhxrLh~-~LMw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
        className="video-clip"
      />
    </div>
  );
};

export default Stream;
