import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../Conteiners/Auth/authSlice";
import { loginHandler } from "../../Helpers";
import styles from "./loginform.module.css";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isInputActive, setIsInputActive] = React.useState(false);
  const [credentialsError, setCredentialsError] = React.useState(false);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const loginSubmit = async (data) => {
    console.log(data);
    setCredentialsError(false);
    setIsInputActive((val) => (val = true));
    const loginRes = await loginHandler(data);
    if (loginRes.status === 200) {
      reset();
      dispatch(login(loginRes.token));
      setIsInputActive((val) => (val = false));
    }
    if (loginRes.status === 401) {
      setCredentialsError(true);
      setIsInputActive((val) => (val = false));
    }
  };
  return (
    <div className={styles.auth}>
      <form className={styles.form} onSubmit={handleSubmit(loginSubmit)}>
        {credentialsError && <span>Wrong email or password</span>}
        <input
          disabled={isInputActive}
          placeholder="Email"
          {...register("email", { required: true })}
        />
        {errors.login && <span>This field is required</span>}
        <input
          disabled={isInputActive}
          placeholder="Password"
          {...register("password", { required: true })}
        />

        {errors.password && <span>This field is required</span>}

        <input disabled={isInputActive} type="submit" />
      </form>
    </div>
  );
};
export default LoginForm;
