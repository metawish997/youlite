import { useEffect } from "react";
import * as Notifications from "expo-notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";
import Constants from "expo-constants";

export const usePushToken = () => {
  useEffect(() => {
    const syncToken = async () => {
      try {
        // 1️⃣ Check & request permission if needed
        let { status } = await Notifications.getPermissionsAsync();

        if (status !== "granted") {
          const permissionResponse =
            await Notifications.requestPermissionsAsync();
          status = permissionResponse.status;
        }

        if (status !== "granted") return;

        let token: string | null = null;

        // 2️⃣ Platform-specific token
        if (Platform.OS === "ios") {
          const expoToken = await Notifications.getExpoPushTokenAsync({
            projectId: Constants.expoConfig?.extra?.eas?.projectId,
          });
          token = expoToken.data;
        } else {
          const deviceToken = await Notifications.getDevicePushTokenAsync();
          token = deviceToken.data;
        }

        if (!token) return;

        // 3️⃣ Avoid duplicate save
        const savedToken = await AsyncStorage.getItem("push_token");
        if (savedToken === token) return;

        await AsyncStorage.setItem("push_token", token);

        // 4️⃣ Send to backend
        await fetch(
          "https://youlitestore.in/wp-json/mobile-app/v1/store-device-token",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              device_token: token,
              device_type: Platform.OS, // ios | android
              user_id: 0,
            }),
          }
        );
      } catch (e) {
        console.log("Push token sync failed", e);
      }
    };

    syncToken();
  }, []);
};
