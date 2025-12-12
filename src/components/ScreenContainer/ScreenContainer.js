import { SafeAreaView } from "react-native-safe-area-context";

export default function ScreenContainer({ children }) {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#f1f1f1" }}
      edges={["top"]}
    >
      {children}
    </SafeAreaView>
  );
}
