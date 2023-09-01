const LoginForm = ({ setAction }) => {
  return (
    <div>
      <div className="m-3 row">
        <div className="col-md-6 bg-primary"></div>
        <div className="col-md-6 ">
          <div>
            LOGIN form
            <button
              className="text-primary"
              onClick={() => {
                setAction("signUp");
              }}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
