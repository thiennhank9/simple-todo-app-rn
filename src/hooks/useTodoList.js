import { useState } from "react";

const MODE = {
  ADD: "ADD",
  UPDATE: "UPDATE",
};

export default function useTodoList() {
  const [items, setItems] = useState([]);
  const [mode, setMode] = useState(MODE.ADD);
  const [selected, setSelected] = useState();
  const [text, setText] = useState("");

  // select item to update
  const onSelect = (item) => {
    setSelected(item);
    setText(item.text);
    setMode(MODE.UPDATE);
  };

  // remove item
  const onRemove = (item) => {
    const indexRemove = items.findIndex((current) => current.key === item.key);
    items.splice(indexRemove, 1);
    setItems([...items]);
    setSelected();
    setText("");
    setMode(MODE.ADD);
  };

  // add or update item
  const onPressInput = () => {
    if (mode === MODE.ADD) {
      const key = items.length === 0 ? 0 : items[items.length - 1].key + 1;
      items.push({ key, text });
      setItems([...items]);
      setText("");
    }

    if (mode === MODE.UPDATE) {
      const indexSelected = items.findIndex(
        (current) => current.key === selected.key
      );
      items[indexSelected].text = text;
      setItems([...items]);
      setSelected();
      setText("");
      setMode(MODE.ADD);
    }
  };

  return { items, mode, text, setText, onSelect, onRemove, onPressInput };
}
