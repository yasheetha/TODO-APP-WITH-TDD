import { fireEvent, render } from "@testing-library/react";
import React from "react";
import Form from './InputForm.js';
import '@testing-library/jest-dom/extend-expect'
import userEvent from "@testing-library/user-event";

describe("rendering", () => {
    it("should contain a text box to provide task name",() => {
        const { getByTestId } = render(<Form />);
        expect( getByTestId("input-textbox") ).toBeInTheDocument;

    });
    it("should contain an add button to add the task",() => {
        const { getByTestId } = render(<Form />);
        expect( getByTestId("add-button") ).toBeInTheDocument;

    });
    it("add button should be enabled",() => {
        const { getByTestId } = render(<Form />);
        expect( getByTestId("add-button") ).toBeEnabled;

    });
    it("text box should be empty",()=>{
        const { getByTestId }= render(<Form />);
        expect(getByTestId("input-textbox")).toHaveTextContent("");
    });
});

describe("functionality", ()=>{
    it("should change the textbox value to the input given",()=>{
        const { getByTestId }= render(<Form />);
        const input_for_textbox = getByTestId("input-textbox");
        fireEvent.input(input_for_textbox,{"target": {"value" : "draw"}});
        expect(getByTestId("input-textbox")).toHaveValue("draw");

    });
    
});