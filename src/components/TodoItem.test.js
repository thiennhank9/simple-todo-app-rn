import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import TodoItem from "./TodoItem";

describe("TodoItem", () => {
  test("render & behave correctly", () => {
    const mockOnRemove = jest.fn(() => {});
    render(
      <TodoItem data={{ key: 1, text: "text" }} onRemove={mockOnRemove} />
    );
    expect(screen.getByText("text")).toBeVisible();
    const removeItem = screen.getByTestId("remove-item");
    fireEvent.press(removeItem);
    expect(mockOnRemove).toBeCalled();
  });
});
