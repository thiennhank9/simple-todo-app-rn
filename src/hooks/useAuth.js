import { useState } from "react";
import { Linking, Platform } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);

  const onAuth = async () => {
    const enrolledLevel = await LocalAuthentication.getEnrolledLevelAsync(); // check if app has enrolled any authentication before
    if (!enrolledLevel) {
      // if not, then open app security settings
      if (Platform.OS === "android") {
        Linking.sendIntent("android.settings.SECURITY_SETTINGS");
        return;
      }
      // Apple rejects opening specific settings
      if (Platform.OS === "ios") {
        Linking.openSettings();
      }
    }
    // Authenticating
    const { success } = await LocalAuthentication.authenticateAsync();
    setAuthenticated(success);
  };

  return { authenticated, onAuth };
}
