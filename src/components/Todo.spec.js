import { fireEvent, render } from "@testing-library/react";
import React from "react";
import Todo from "./Todo";
import '@testing-library/jest-dom/extend-expect'

describe("default mode",()=>{
    it("should contain a check box",()=>{
        const { getByTestId } = render(<Todo />);
        expect(getByTestId("checkbox")).toHaveAttribute("type","checkbox");
    });
    it("should be able to press edit button",()=>{
        const { getByTestId } = render(<Todo />);
        expect(getByTestId("edit-button")).toBeEnabled;
    });
    it("should be able to press delete button",()=>{
        const { getByTestId } = render(<Todo />);
        expect(getByTestId("delete-button")).toBeEnabled;
    });
    it("should display the task name",()=>{
        const { getByTestId } = render(<Todo />);
        expect(getByTestId("task-name")).toHaveValue;
    });
});

describe("edit mode",()=>{
    it("shoul display a text box to provide input",()=>{
        const { getByTestId } = render(<Todo />);
        fireEvent.click(getByTestId("edit-button"));
        expect(getByTestId("new-textbox")).toHaveAttribute("type","text");
    });
    it("click button shouldn't be in diasbled mode",()=>{
        const { getByTestId } = render(<Todo />);
        fireEvent.click(getByTestId("edit-button"));
        expect(getByTestId("cancel-button")).not.toBeDisabled;
    });
    it("save button shouldn't be in diasbled mode",()=>{
        const { getByTestId } = render(<Todo />);
        fireEvent.click(getByTestId("edit-button"));
        expect(getByTestId("save-button")).not.toHaveAttribute("disabled");
    });
});

describe("functionality",()=>{
    it("should return back to viewing template where we can edit and delete the tasks(cancel button)",()=>{
        const { getByTestId } = render(<Todo />);
        fireEvent.click(getByTestId("edit-button"));
        fireEvent.click(getByTestId("cancel-button"));
        expect(getByTestId("edit-button")).toBeEnabled;
        expect(getByTestId("delete-button")).toBeEnabled;
        
    });
});
