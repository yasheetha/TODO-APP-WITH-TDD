import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import '@testing-library/jest-dom/extend-expect'

describe("should ",()=>{
    it("should display the heading of the app",()=>{
        const { getByTestId } = render(<App />);
        expect(getByTestId("heading")).toBeInTheDocument;
    });
    it("should display the number of tasks label",()=>{
        const { getByTestId } = render(<App />);
        expect(getByTestId("task-number")).toBeInTheDocument;
    });
});

