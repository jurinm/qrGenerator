import { Button, Input, Form } from "../../Components";
import styles from "./login.module.css";
const Login = () => {
  return (
    <div className={styles.login}>
      <Form>
        <Input 
          labelText={"Email"}
          inputPlaceholder={"Enter your Email"} />
        <Input
          labelText={"Password"}
          inputPlaceholder={"Enter your Password"}
        />
        <Button>Sign In</Button>
      </Form>
    </div>
  );
};

export default Login;
