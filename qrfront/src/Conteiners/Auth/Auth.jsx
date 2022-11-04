import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./authSlice";
import { LoginForm } from "../../Components";

const UserProfile = ({signOut}) => {
  return (
    <div className="">
      <div>
        <h2>You are signed in</h2>
        <button onClick={() => signOut()}>Signout</button>
      </div>
    </div>
    )
};

const Auth = () => {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  console.log(!!token)

  if (token) {
    return (
      <UserProfile signOut={() => dispatch(logout())}/>
    );
  } else {
    return <LoginForm />;
  }
};

export default Auth;
