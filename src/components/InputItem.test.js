import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import InputItem from "./InputItem";

describe("InputItem", () => {
  test("render & behave correctly", () => {
    const mockOnChange = jest.fn(() => {});

    render(<InputItem onChangeText={mockOnChange} buttonTitle="ADD" />);

    expect(screen.getByText("ADD")).toBeVisible();
    const input = screen.getByTestId("input-item");
    fireEvent.changeText(input, "Item 1");
    expect(mockOnChange).toBeCalled();
  });
});
