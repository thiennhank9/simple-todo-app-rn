import { renderHook, act } from "@testing-library/react-native";
import useTodoList from "./useTodoList";

describe("useTodoList", () => {
  const { result } = renderHook(() => useTodoList());

  test("add item", () => {
    expect(result.current.items.length).toBe(0);
    act(() => {
      result.current.setText("Item 1");
      result.current.onPressInput();
    });
    expect(result.current.items.length).toBe(1);
  });

  test("remove item", () => {
    act(() => {
      result.current.onRemove({ key: 0 });
    });
    expect(result.current.items.length).toBe(0);
  });
});
