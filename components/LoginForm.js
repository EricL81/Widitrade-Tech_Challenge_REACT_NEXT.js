import React, { useState, useEffect } from "react";
import classes from "./LoginForm.module.scss";
import { useRouter } from "next/router";

const LoginForm = () => {
	const initialValues = {
		user: "",
		password: "",
	};

	const router = useRouter();

	const [values, setValues] = useState(initialValues);
	const [errors, setErrors] = useState({});
	const [isSubmitted, setIsSubmitted] = useState(false);

	const onChangeHandler = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setValues({ ...values, [name]: value });
	};

	const validate = (values) => {
		const errors = [];

		if (!values.user) {
			errors.user = "User cannot be empty";
		}

		if (!values.password) {
			errors.password = "Password cannot be empty";
		} else if (values.password.length < 6) {
			errors.password = "Password must be more than 6 characters";
		} else if (values.password.length > 12) {
			errors.password = "Password cannot exceed 12 characters";
		}

		return errors;
	};

	const onSubmitHandler = (event) => {
		event.preventDefault();
		setErrors(validate(values));
		if (!errors && isSubmitted) {
			router.push("/newPage");
		}
	};

	return (
		<div className={classes.loginForm}>
			<form className={classes.signUpForm} onSubmit={onSubmitHandler}>
				<div className={classes.inputGroup}>
					<input type="text" name="user" onChange={onChangeHandler} placeholder="User" className={`${errors.user ? classes.inputError : ""}`} />
					<div className={classes.error}>{errors.user}</div>
				</div>
				<div className={classes.inputGroup}>
					<input type="password" name="password" onChange={onChangeHandler} placeholder="Password" className={`${errors.password ? classes.inputError : ""}`} />
					<div className={classes.error}>{errors.password}</div>
				</div>
				<button type="submit">Login</button>
			</form>
		</div>
	);
};

export default LoginForm;
