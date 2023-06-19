import { useState, useRef } from 'react';
import './register.css';

const Register = () => {
  const [userEmail, setUserEmail] = useState('');
  const emailRef = useRef();

  const handleReg = () => {
    setUserEmail(emailRef.current.value);
  };

  console.log(userEmail);
  return (
    <div className="register">
      <div className="header">
        <div className="wrapper">
          <h1 className="logo">Slyter</h1>
          <button className="signin-btn">Sign-in</button>
        </div>
      </div>
      <div className="container">
        <h1>Endless Movies, Tv Shows and plenty Spooks...</h1>
        <h2>Watch Movies From The Comfort Of Your Own Home </h2>
        <p>
          Ready to Get Spookified? Enter your email to create or restart your
          membership
        </p>
        <div className="input">
          <input type="email" placeholder="Email Address" ref={emailRef} />
          <button className="register-btn" onClick={handleReg}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
