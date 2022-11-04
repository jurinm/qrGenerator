import React from "react";
import { useForm } from "react-hook-form";
import styles from "./registrationform.module.css";
import { registrationHandler } from "../../Helpers";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const registrationFormSchema = yup.object().shape({
  email: yup
    .string()
    .email("Enter valid email address")
    .required("This field is required")
    .min(5, "To short")
    .max(25, "Email is to long"),
  password: yup
    .string()
    .required("This field is required")
    .min(8, "Must be at least 8 characters long")
    .max(25, "Password is to long, 25 characters max"),
  passwordSecond: yup
    .string()
    .required("This field is required")
    .min(8, "Must be at least 8 characters long")
    .max(25, "Password is to long, 25 characters max")
    .oneOf([yup.ref("password")], "Your passwords do not match."),
});

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registrationFormSchema) });
  //TODO: Styling for inputs and errors
  const [dbStatus, setDbStatus] = React.useState({ status: "", message: "" });

  const registrationSubmit = async (registrationData) => {
    const registrationResult = await registrationHandler(registrationData);
    console.log(registrationResult);
    if (registrationResult.status === 409) {
      setDbStatus((newVal) => (newVal = registrationResult));
    }
    if (registrationResult.status === 201) {
      console.log(registrationResult.message);
      setDbStatus((newVal) => (newVal = registrationResult));
      reset();

    }
  };

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit(registrationSubmit)}>
        {dbStatus.status && <span>{dbStatus.message}</span>}
        <input placeholder="Email" {...register("email", { required: true })} />
        {errors.email && <span>{errors.email.message}</span>}
        <input
          placeholder="Password"
          {...register("password", { required: true })}
        />
          {errors.password && <span>{errors.password.message}</span>}

        <input
          placeholder="Repeat password"
          {...register("passwordSecond", { required: true })}
        />
         {errors.passwordSecond && <span>{errors.passwordSecond.message}</span>}


        <input type="submit" />
      </form>
    </div>
  );
};

export default RegistrationForm;
