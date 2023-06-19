import List from '../../components/movielist/List';
import Navbar from '../../components/navbar/Navbar';
import Popular from '../../components/popular/Popular';
import './home.css';

const Home = () => {
  return (
    <>
      <div className="home">
        <Navbar />
        <Popular type="movie" />
        <List />
        <List />
        <List />
      </div>
    </>
  );
};

export default Home;
