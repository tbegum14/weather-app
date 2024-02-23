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
		onSelect: ()=>{}
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

	it("renders with the correct values", () => {
		const { getByText, getByTestId } = render(
			<ForecastSummary
				date={validProps.date}
				description={validProps.description}
				icon={validProps.icon}
				temperature={validProps.temperature.max}
				onSelect={validProps.onSelect}
			/>
		);
        expect(getByText("Thu Jan 01 1970")).toHaveAttribute("class", "forecast-summary_date")
		expect(getByText("stubdescription")).toHaveAttribute(
			"class",
			"forecast-summary_description"
		);
		expect(getByTestId("forecast-icon")).toHaveAttribute(
			"class",
			"forecast-summary_icon"
		);
		expect(getByText("10")).toHaveAttribute(
			"class",
			"forecast-summary_temperature"
		);
	});
});
