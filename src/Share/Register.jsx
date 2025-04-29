import { useContext, useState } from "react";
import img1 from "../assets/others/authentication2.png";
import GmailLogin from "./GmailLogin";
import { AuthContext } from "../components/Authountation/Authorization";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { registerUser, setUsers, userProfileUpdate } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");
  const navigate = useNavigate();
  const location=useLocation()

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handlePasswordChange = (e) => {
    const pwd = e.target.value;
    const strongRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{5,}$/;

    if (strongRegex.test(pwd)) {
      setPasswordStrength("Strong");
    } else {
      setPasswordStrength("Weak");
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    if (passwordStrength !== "Strong") {
      alert("Please choose a stronger password.");
      return;
    }

    registerUser(email, password)
      .then((res) => {
        userProfileUpdate({
          displayName: name,
          photoURL: photo,
        })
          .then((res) => {
            setUsers(res.user);
            navigate(location?.state || "/");
            console.log("Profile updated", res.user);
          })
          .catch((err) => {
            // console.log(err.message);
            alert("Register fail Change email");
          });
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="min-h-screen login-img lg:p-28 md:pb-20 p-10 pt-40 md:pt-0">
      <Helmet>
        <title>Mamma Mia | Register</title>
      </Helmet>
      <div className="login-img md:p-20 drop-shadow-lg shadow-black lg:flex gap-10 lg:flex-row-reverse justify-center items-center">
        <div className="lg:w-[50%]">
          <img
            className="object-cover overflow-hidden w-full"
            src={img1}
            alt="Signup Illustration"
          />
        </div>
        <div className="pt-10 lg:pt-0">
          <h1 className="text-3xl font-semibold text-center text-black">
            Sign Up
          </h1>
          <div className="card w-full shrink-0">
            <div className="card-body">
              <form onSubmit={handleRegister} className="fieldset text-black">
                <label className="fieldset-label text-black">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input bg-white border border-solid border-gray-300"
                  placeholder="Your Name"
                  required
                />
                <label className="fieldset-label text-black">Photo URL</label>
                <input
                  type="text"
                  name="photo"
                  className="input bg-white border border-solid border-gray-300"
                  placeholder="Photo URL"
                  required
                />
                <label className="fieldset-label text-black">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input bg-white border border-solid border-gray-300"
                  placeholder="Email"
                  required
                />
                <label className="fieldset-label text-black">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="input bg-white border border-solid border-gray-300 w-full pr-10"
                    placeholder="Password"
                    onChange={handlePasswordChange}
                    required
                  />
                  <span
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-3 cursor-pointer text-xl text-gray-600"
                  >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </span>
                </div>
                <p
                  className={`text-sm mt-1 ${
                    passwordStrength === "Strong"
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  Password strength: {passwordStrength || "Enter password"}
                </p>
                <div>
                  <a className="link link-hover text-black">Forgot password?</a>
                </div>
                <button
                  type="submit"
                  className="btn btn-neutral border-none bg-[#D1A054] mt-4"
                >
                  Sign Up
                </button>
              </form>
              <p className="text-[#D1A054] text-sm text-center pt-9 pb-4">
                New here?{" "}
                <Link
                  to={"/login"}
                  className="text-[#b17c2c] text-sm text-center pt-9 pb-4"
                >
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

export default Register;
