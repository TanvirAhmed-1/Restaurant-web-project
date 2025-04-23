import { useContext, useEffect, useRef, useState } from "react";
import img1 from "../assets/others/authentication2.png";
import GmailLogin from "./GmailLogin";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../components/Authountation/Authorization";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate=useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disable, setDisable] = useState(true);

  const captchaRaf = useRef(null);

  useEffect(() => {
    loadCaptchaEnginge(4);
  }, []);

  const handleCaptchaRaf = () => {
    const user_captcha_value = captchaRaf.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    loginUser(email, password)
      .then((res) => {
        console.log("Logged in user:", res.user);
        navigate(location?.state ? location.state : "/")
      })
      .catch((err) => {
        console.log("Login error:", err.message);
      });
  };

  return (
    <div className="min-h-screen login-img lg:p-28 md:pb-20 p-10 pt-40 md:pt-0">
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="login-img md:p-20 drop-shadow-lg shadow-black lg:flex gap-10 justify-center items-center ">
        <div className="lg:w-[50%]">
          <img
            className="object-cover overflow-hidden w-full p-2"
            src={img1}
            alt="Login Illustration"
          />
        </div>
        <div className="pt-10 lg:pt-0">
          <h1 className="text-3xl font-semibold text-center text-black">Login</h1>
          <div className="card w-full shrink-0">
            <div className="card-body">
              <form onSubmit={handleLogin} className="fieldset">
                <label className="fieldset-label text-black">Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input bg-white border border-solid border-gray-300 text-black"
                  placeholder="Email"
                  required
                />
                <label className="fieldset-label text-black">Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input bg-white border border-solid border-gray-300 text-black"
                  placeholder="Password"
                  required
                />
                <div>
                  <a className="link link-hover text-black">Forgot password?</a>
                </div>

                <div>
                  <LoadCanvasTemplate />
                  <input
                    ref={captchaRaf}
                    type="text"
                    className="input bg-white border border-solid border-gray-300 text-black"
                    placeholder="Enter Captcha"
                  />
                  <button
                    type="button"
                    onClick={handleCaptchaRaf}
                    className="btn mt-2"
                  >
                    Validate
                  </button>
                </div>

                <button
                  disabled={disable}
                  type="submit"
                  className="btn btn-neutral border-none bg-[#D1A054] mt-4"
                >
                  Sign In
                </button>
              </form>
              <p className="text-[#D1A054] text-sm text-center pt-9 pb-4">
                New here?{' '}
                <Link to="/register" className="text-[#b17c2c]">
                  Create a New Account
                </Link>
              </p>
              <section>
                <GmailLogin />
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;