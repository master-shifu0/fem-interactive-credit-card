import React from "react";

import iconComplete from "../../images/icon-complete.svg";
function Success({ setFormIsValid, clearForm }) {
	return (
		<div className="success">
			<img alt="" src={iconComplete} />
			<h1 className="success-header">Thank you</h1>
			<p className="success-text">We've added your card details</p>
			<button
				className="button"
				onClick={() => {
					setFormIsValid(false);
					clearForm();
				}}
			>
				continue
			</button>
		</div>
	);
}

export default Success;
