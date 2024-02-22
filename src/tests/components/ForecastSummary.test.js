import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../../components/ForecastSummary";

describe("Forecast Summary", () => {
	const validProps = {
		date: 1111111,
		description: "stubdescription",
		icon: "stubIcon",
		temperature: {
			min: 1,
			max: 10,
		},
	};

	it("displays the correct values", () => {
		const { asFragment } = render(
			<ForecastSummary
				date={validProps.date}
				description={validProps.description}
				icon={validProps.icon}
				temperature={validProps.temperature.max}
			/>
		);

		expect(asFragment()).toMatchSnapshot();
	});
});
