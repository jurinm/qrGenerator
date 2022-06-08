import styles from "./signup.module.css";

import {registrationHandler} from '../../Helpers'

import { Input, Form, Button } from "../../Components";

const SignUp = () => {
    
  return (
    <div className={styles.signup}>
      <Form submitHandler={registrationHandler}>
        <Input
          labelText={"Nickname"}
          inputId={"nickname"}
          inputPlaceholder={"Enter your nickname"}
          inputType={"text"}
          inputName={"nickname"}
        />
        <Input
          labelText={"Email address"}
          inputId={"email"}
          inputPlaceholder={"Enter your email address"}
          inputType={"email"}
          inputName={"email"}
        />
        <Input
          labelText={"Password"}
          inputId={"password"}
          inputPlaceholder={"Select your password"}
          inputType={"password"}
          inputName={"password"}
        />
        <Input
          labelText={"Confirm password"}
          inputId={"checkPassword"}
          inputPlaceholder={"Confirm your password"}
          inputType={"password"}
          inputName={"passwordCheck"}
        />
        <Button buttonText={'Sign Up'} />
      </Form>
    </div>
  );
};

export default SignUp;
