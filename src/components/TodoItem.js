import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import theme from "../theme";

TodoItem.propTypes = {
  data: PropTypes.shape({ key: PropTypes.number, text: PropTypes.string }),
  onSelect: PropTypes.func,
  onRemove: PropTypes.func,
};

export default function TodoItem({ data, onSelect, onRemove }) {
  return (
    <TouchableOpacity
      onPress={onSelect}
      style={styles.container}
      testID="select-item"
    >
      <View style={styles.left}>
        <View style={styles.circle} />
        <Text>{data.text}</Text>
      </View>
      <Button
        title="Remove"
        onPress={onRemove}
        testID="remove-item"
        accessibilityLabel="remove-item"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: theme.space.m,
    padding: theme.space.xs,
    marginVertical: theme.space.xs,
    backgroundColor: "white",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.space.xs,
  },
  circle: {
    backgroundColor: theme.color.primary,
    width: theme.space.s,
    height: theme.space.s,
    borderRadius: theme.space.xs,
  },
});
