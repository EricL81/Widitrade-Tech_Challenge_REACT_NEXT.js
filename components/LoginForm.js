import React, { useState, useEffect } from "react";
import classes from "./LoginForm.module.scss";
import { useRouter } from "next/router";
import Image from "next/image";
import eye from "../public/eye.png";

const LoginForm = () => {
	const initialValues = {
		user: "",
		password: "",
	};

	const router = useRouter();

	const [values, setValues] = useState(initialValues);
	const [errors, setErrors] = useState({});
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [passwordIsVisible, setPasswordIsVisible] = useState(false);

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
		setIsSubmitted(true);
	};

	const passwordHandler = () => {
		setPasswordIsVisible(!passwordIsVisible);
	};

	useEffect(() => {
		if (Object.keys(errors).length === 0 && isSubmitted) {
			router.push("/newPage");
		}
	}, [errors]);

	return (
		<form className={classes.loginForm} onSubmit={onSubmitHandler}>
			<div className={classes.inputGroup}>
				<label htmlFor="user">User</label>
				<input type="text" id="user" name="user" onChange={onChangeHandler} placeholder="Tyson.Jakubowski@ya|" />
				<div className={classes.error} style={{ display: errors.user ? "block" : "none" }}>
					{errors.user}
				</div>
			</div>
			<div className={classes.inputGroup}>
				<label htmlFor="password">Password</label>

				<input type={passwordIsVisible ? "text" : "password"} id="password" name="password" onChange={onChangeHandler} placeholder="Enter your password" />
				<div className={classes.imageWrapper}>
					<Image src={eye} alt="eye" width={24} height={24} onClick={passwordHandler} />
				</div>

				<div className={classes.error} style={{ display: errors.password ? "block" : "none" }}>
					{errors.password}
				</div>
			</div>
			<button type="submit">Login</button>
		</form>
	);
};

export default LoginForm;
