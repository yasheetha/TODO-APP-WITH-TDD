import { render } from "@testing-library/react";
import React from "react";
import Buttons from "./AllActiveCompleteButtons";
import '@testing-library/jest-dom/extend-expect'

describe("rendering of filter",()=>{
    it("filters should be of type buttons ",()=>{
        const { getByTestId } = render(<Buttons />);
        expect(getByTestId("buttons")).toHaveAttribute("type","button");
    });
    it("should be able to access individually",()=>{
        const { getByTestId } = render(<Buttons />);
        expect(getByTestId("buttons")).toHaveAccessibleName;
    });

});