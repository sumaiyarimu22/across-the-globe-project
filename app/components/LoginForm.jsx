import Image from "next/image";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import loginImg from "../../public/atg_illustration.png";

const LoginForm = ({ setAction }) => {
  return (
    <div className="">
      <p className="d-flex justify-content-center py-2 form-title">
        {`Let's learn, share & inspire each other with our passion for computer
      engineering. Sign up now 🤘🏼`}
      </p>
      <div className="m-3 row small-text">
        {/* LEFT SIDE */}
        <div className="col-md-6 ">
          <h5 className="bold-font">Sign In</h5>

          {/* FORM DESIGN */}
          <form className="d-flex flex-column py-3">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="login-input"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="login-input"
            />

            <button
              type="submit"
              className="py-2 my-3 bg-primary border-0 rounded-4"
            >
              Sign In
            </button>
            <button
              type="submit"
              className="py-2 my-2 rounded-2 bg-white  border-light"
            >
              <span className="text-primary p-1">
                <BsFacebook />
              </span>
              Sign up with Facebook
            </button>
            <button
              type="submit"
              className="py-2  rounded-2 bg-white border-light"
            >
              <span>
                <FcGoogle />
              </span>{" "}
              Sign up with Google
            </button>
            <div className="d-flex justify-content-center my-3">
              <button className="border-0 bg-white">Forgot Password?</button>
            </div>
          </form>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-md-6">
          <div>
            <div className="d-flex justify-content-center">
              {` Don’t have an account yet?`}
              <button
                className="text-primary bg-white border-0"
                onClick={() => {
                  setAction("signUp");
                }}
              >
                Create new for free!
              </button>
            </div>

            {/* IMAGE */}

            <div className="d-flex justify-content-center">
              <Image
                src={loginImg}
                alt="navbar image"
                priority
                height={500}
                width={500}
                className="img-fluid w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
