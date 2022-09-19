import React from "react";
import { useForm } from "react-hook-form";
import styles from "./registrationform.module.css";
import { registrationHandler } from "../../Helpers";
const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [dbStatus, setDbStatus] = React.useState({status:'', message:''})

  const registrationSubmit = async (registrationData) => {
    const registrationResult = await registrationHandler(registrationData);
    console.log(registrationResult)
    if (registrationResult.status === 409) {
        console.log(registrationResult.message)
        setDbStatus(newVal => newVal = registrationResult)
    }
    if (registrationResult.status === 201) {
        console.log(registrationResult.message)
        setDbStatus(newVal => newVal = registrationResult)
        reset()
    }

  };

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit(registrationSubmit)}>
        {dbStatus.status && <span>{dbStatus.message}</span>}
        <input placeholder="Email" {...register("email", { required: true })} />
        {errors.login && <span>This field is required</span>}
        <input
          placeholder="Password"
          {...register("password", { required: true })}
        />
        <input
          placeholder="Repeat password"
          {...register("password", { required: true })}
        />

        {errors.password && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
};

export default RegistrationForm;
