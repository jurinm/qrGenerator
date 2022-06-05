import { registrationHandler } from "../../Helpers";

const Auth = () => {

   const formHandler = (e) =>{
    e.preventDefault();
    const data = new FormData(e.target);
    const registrationData = Object.fromEntries(data.entries());
    registrationHandler(registrationData)
    e.target.reset()
   };
   
  return (
    <div className="Auth">
      <form onSubmit={formHandler}>
        <input type="text" name="nickname" id="nickname"/>
        <input type="text" name="email" id="email"/>
        <input type="password" name="password" id="password" autoComplete="on"/>
        <input type="password" name="passwordCheck" id="passwordCheck" autoComplete="on"/>
        <button>Send</button>
      </form>
    </div>
  );
};

export default Auth;
