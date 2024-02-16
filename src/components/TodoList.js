import { FlatList, SafeAreaView, StyleSheet, Text } from "react-native";
import TodoItem from "./TodoItem";
import InputItem from "./InputItem";
import theme from "../theme";
import useTodoList from "../hooks/useTodoList";

export default function TodoList() {
  const { items, mode, text, setText, onSelect, onRemove, onPressInput } =
    useTodoList();

  return (
    <SafeAreaView style={styles.safeView}>
      <Text style={styles.title}>Todo</Text>
      <FlatList
        style={styles.list}
        data={items}
        renderItem={({ item }) => (
          <TodoItem
            data={item}
            onSelect={() => onSelect(item)}
            onRemove={() => onRemove(item)}
          />
        )}
        keyExtractor={(item) => item.key}
      />
      <InputItem
        text={text}
        onChangeText={setText}
        buttonTitle={mode}
        onPressButton={onPressInput}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: theme.color.light,
  },
  title: {
    fontSize: theme.space.s,
    color: theme.color.primary,
    padding: theme.space.s,
  },
  list: {
    padding: theme.space.s,
  },
});
