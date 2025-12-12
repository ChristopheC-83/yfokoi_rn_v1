import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Dimensions } from "react-native";

export default function TabIcon({ focused, icon, label }) {
  const SCREEN_WIDTH = Dimensions.get("window").width;
    const TAB_WIDTH = SCREEN_WIDTH * 0.33; // 33% pour 3 tabs
    

  return (
    <View
      style={{
        alignItems: "center",
        width: TAB_WIDTH,
      }}
    >
      <Ionicons
        name={focused ? icon : `${icon}-outline`}
        size={24}
        color={focused ? "#007AFF" : "#999"}
      />
      <Text
        style={{
          fontSize: 12,
          color: focused ? "#007AFF" : "#999",
          marginTop: 2,
        }}
      >
        {label}
      </Text>
    </View>
  );
}
