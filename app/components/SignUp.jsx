import Image from "next/image";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import loginImg from "../../public/atg_illustration.png";
const SignUp = ({ setAction }) => {
  return (
    <div className="">
      <p className="d-flex justify-content-center py-2 form-title">
        {`Let's learn, share & inspire each other with our passion for computer
        engineering. Sign up now 🤘🏼`}
      </p>
      <div className="m-3 row small-text">
        {/* LEFT SIDE */}
        <div className="col-md-6 ">
          <h5 className="bold-font">Create Account</h5>

          {/* FORM DESIGN */}
          <form className="d-flex flex-column py-3">
            <div className="d-flex">
              <input
                type="text"
                placeholder="First Name"
                name="first-name"
                className="w-50  login-input"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-50 login-input"
                name="last-name "
              />
            </div>
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
            <input
              type="password"
              name="Confirm Password"
              placeholder="Confirm Password"
              className="login-input"
            />
            <button
              type="submit"
              className="py-2 my-3 bg-primary border-0 rounded-4"
            >
              Create Account
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
          </form>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-md-6">
          <div>
            <div className="d-flex justify-content-center">
              Already have an account?
              <button
                className="text-primary bg-white border-0"
                onClick={() => {
                  setAction("signIn");
                }}
              >
                Sign In
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
            <small>
              By signing up, you agree to our Terms & conditions, Privacy policy
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
