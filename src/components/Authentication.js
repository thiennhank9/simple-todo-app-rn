import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PropTypes from "prop-types";
import theme from "../theme";
import useAuth from "../hooks/useAuth";

Authentication.propTypes = {
  children: PropTypes.node,
};

export default function Authentication({ children }) {
  const { authenticated, onAuth } = useAuth();

  return !authenticated ? (
    <View style={styles.container}>
      <Text>Set Authentication to Proceed</Text>
      <TouchableOpacity style={styles.button} onPress={onAuth}>
        <Text style={styles.buttonText}>Go to Settings</Text>
      </TouchableOpacity>
    </View>
  ) : (
    children
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: theme.color.white,
    padding: theme.space.s,
  },
  button: {
    marginTop: theme.space.s,
    backgroundColor: theme.color.primary,
    paddingVertical: theme.space.s,
    paddingHorizontal: theme.space.m,
    borderRadius: theme.space.s,
  },
  buttonText: {
    color: theme.color.white,
  },
});
