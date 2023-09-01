const SignUp = ({ setAction }) => {
  return (
    <div>
      <p className="d-flex justify-content-center py-2 form-title">
        {`Let's learn, share & inspire each other with our passion for computer
        engineering. Sign up now 🤘🏼`}
      </p>
      <div className="m-3 row">
        <div className="col-md-6 bg-primary"></div>
        <div className="col-md-6 ">
          <div>
            <div>
              Already have an account?{" "}
              <button
                className="text-primary"
                onClick={() => {
                  setAction("signIn");
                }}
              >
                sign In
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
