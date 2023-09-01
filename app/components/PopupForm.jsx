import LoginForm from "./LoginForm";
import { useState } from "react";
import SignUp from "./SignUp";

const Form = () => {
  const [action, setAction] = useState("signUp");
  return (
    <div>
      {action === "signUp" ? (
        <SignUp setAction={setAction} />
      ) : (
        <LoginForm setAction={setAction} />
      )}
    </div>
  );
};

export default Form;
