import React from "react";

const Auth = () => {

  return (
    <div className="Auth">
      <form action="http://127.0.0.1:5000/auth" method="post" request>
        <input type="text" name="nickname" id="nickname"/>
        <input type="text" name="email" id="email"/>
        <input type="password" name="password" id="password" autoComplete="on"/>
        <input type="password" name="password-check" id="password-check" autoComplete="on"/>
        <button>Send</button>
      </form>
    </div>
  );
};

export default Auth;
