import React from 'react';
import styles from '../../styles/UI/Button.module.scss';

const Button = (props) => {
	return (
		<button type={props.type} onClick={props.onClick} className={`${props.classCss ? `${styles[props.classCss]}` : ''}`}>
			{props.children}
		</button>
	);
};

export default Button;
