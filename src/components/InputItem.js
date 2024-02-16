import { Button, StyleSheet, TextInput, View } from "react-native";
import PropTypes from "prop-types";
import theme from "../theme";

InputItem.propTypes = {
  text: PropTypes.string,
  onChangeText: PropTypes.func,
  buttonTitle: PropTypes.string,
  onPressButton: PropTypes.func,
};

export default function InputItem({
  text,
  onChangeText,
  buttonTitle,
  onPressButton,
}) {
  return (
    <View style={styles.container}>
      <TextInput
        accessibilityLabel="input-item"
        testID="input-item"
        style={styles.input}
        value={text}
        onChangeText={onChangeText}
      />
      <Button
        accessibilityLabel="button-add"
        testID="button-add"
        style={styles.button}
        title={buttonTitle}
        disabled={!text}
        onPress={onPressButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: theme.space.xs,
    marginHorizontal: theme.space.s,
    gap: theme.space.s,
    backgroundColor: theme.color.white,
    borderRadius: theme.space.s,
    marginBottom: theme.space.s,
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    height: theme.space.s,
  },
  button: {
    color: theme.color.primary,
    padding: theme.space.s,
    borderRadius: theme.space.s,
  },
});
