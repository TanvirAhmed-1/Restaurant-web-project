import img1 from "../assets/others/authentication2.png";
import GmailLogin from "./GmailLogin";
const Register = () => {
  return (
    <div className="min-h-screen login-img lg:p-28 md:pb-20 p-10 pt-40 md:pt-0">
      <div className="login-img md:p-20 drop-shadow-lg shadow-black lg:flex gap-10 lg:flex-row-reverse justify-center items-center ">
        <div className="lg:w-[50%]">
          <img
            className="object-cover overflow-hidden w-full"
            src={img1}
            alt=""
            srcset=""
          />
        </div>
        <div className=" pt-10 lg:pt-0">
          <h1 className="text-3xl font-semibold text-center text-black">Sign Up</h1>
          <div>
            <div className="card w-full shrink-0 ">
              <div className="card-body">
                <fieldset className="fieldset">
                  <label className="fieldset-label text-black">Email</label>
                  <input type="email" className="input bg-white border border-solid border-gray-300" placeholder="Email" />
                  <label className="fieldset-label text-black">Password</label>
                  <input
                    type="password"
                    className="input bg-white border border-solid border-gray-300"
                    placeholder="Password"
                  />
                  <div>
                    <a className="link link-hover text-black">Forgot password?</a>
                  </div>
                  <button className="btn btn-neutral  border-none bg-[#D1A054] mt-4">Sign In</button>
                </fieldset>
                <p className="text-[#D1A054] text-sm text-center pt-9 pb-4">New here? Create a New Account</p>
                <section>
                  <GmailLogin></GmailLogin>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
