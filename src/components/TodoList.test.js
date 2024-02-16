import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import TodoList from "./TodoList";

describe("TodoList", () => {
  test("simulate actions", () => {
    render(<TodoList />);

    // Add Item
    const input = screen.getByTestId("input-item");
    fireEvent.changeText(input, "Item 1");
    const buttonAdd = screen.getByTestId("button-add");
    fireEvent.press(buttonAdd);
    expect(screen.getByText("Item 1")).toBeVisible();

    // Update Item
    const selectItem = screen.getByTestId("select-item");
    fireEvent.press(selectItem);
    fireEvent.changeText(input, "Item 1 Updated");
    fireEvent.press(buttonAdd);
    expect(screen.getByText("Item 1 Updated")).toBeVisible();

    // Remove Item
    const removeItem = screen.getByTestId("remove-item");
    fireEvent.press(removeItem);
    expect(screen.queryByText("Item 1 Updated")).not.toBeVisible();
  });
});
