import React from "react";

export default function LocationDetails(props) {
	const { city, country, errorMessage } = props;
	LocationDetails.defaultProps = {
		errorMessage: "",
	  };
	return errorMessage? <h1>{errorMessage}</h1>:<h1>{`${city}, ${country}`}</h1>;
}
