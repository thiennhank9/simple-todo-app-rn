import React from "react";
import { Authentication, TodoList } from "./src/components";

export default function App() {
  return (
    <Authentication>
      <TodoList />
    </Authentication>
  );
}
