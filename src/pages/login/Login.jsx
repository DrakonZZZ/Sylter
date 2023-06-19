import './login.css';

const Login = () => {
  return (
    <div className="login">
      <div className="header">
        <div className="wrapper">
          <h1 className="logo">Slyter</h1>
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="text" placeholder="Email Address" />
          <input type="Password" placeholder="Password" />
          <button className="login-btn">Sign In</button>
          <span>
            Create a <b>New Account</b>, If you don't have one
          </span>
          <small>This site is protected by reCAPTCHA and the Google</small>
        </form>
      </div>
    </div>
  );
};

export default Login;
