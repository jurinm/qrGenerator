import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./authSlice";
import { LoginForm } from "../../Components";

const Auth = () => {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  if (token) {
    return (
      <div>
        <h2>You are signed in</h2>
        <button onClick={() => dispatch(logout())}>Signout</button>
      </div>
    );
  } else {
    return <LoginForm />
  }
};

export default Auth;
