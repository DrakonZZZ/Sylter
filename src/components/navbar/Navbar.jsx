import './navbar.css';
import { BiSearch } from 'react-icons/bi';
import { IoIosNotifications } from 'react-icons/io';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { useState } from 'react';

const Navbar = () => {
  const [navBackground, setNavBackground] = useState(false);

  window.onscroll = () => {
    setNavBackground(window.scrollY !== 0 && true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={navBackground ? 'navbar scrolled' : 'navbar'}>
      <div className="nav-container">
        <div className="left-links">
          <h3>Slyter</h3>
          <span>Homepage</span>
          <span>Collection</span>
          <span>Movies</span>
          <span>Series</span>
          <span>Specials</span>
        </div>
        <div className="right-links">
          <BiSearch />
          <span className="premium">Premium</span>
          <IoIosNotifications />
          <img
            src="https://m.media-amazon.com/images/M/MV5BMjUxMjE4MTQxMF5BMl5BanBnXkFtZTcwNzc2MDM1NA@@._V1_.jpg"
            alt=""
          />
          <div className="profile">
            <AiOutlineCaretDown />
            <div className="settings">
              <span>Settings</span>
              <span>Log out</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
