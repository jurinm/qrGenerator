import { Button, Input, Form, Spiner } from "../../Components";
import styles from "./login.module.css";
import { loginHandler } from "../../Helpers";
const Login = ({ ...props }) => {
  console.log(props)
  const loginForm = () => {
      return (
        <Form submitHandler={props.authHandler.loginHandler}>
          <Input
            labelText={"Email"}
            inputPlaceholder={"Enter your Email"}
            inputType={"email"}
            inputName={"email"}
          />
          <Input
            labelText={"Password"}
            inputPlaceholder={"Enter your Password"}
            inputType={"password"}
            inputName={"password"}
          />
          <Button>Sign In</Button>
        </Form>
      )
  }
  const singInCheck = () => {
    if (props.loading){
      return <Spiner />
    }
    if (props.isSignedIn === true) {
      return (
        <>
          <div className="">
            <p>You are Signed in as {props.credentials.nickname}</p>
          </div>
          <Button buttonClickHandler={props.authHandler.signOut}>Sign Out</Button>
        </>
      );
    }  

  };

  return <div className={styles.login}>{props.isSignedIn ? singInCheck() : loginForm()}</div>;
};

export default Login;
