import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigation from "./src/navigation";
import GlobalToast from "./src/components/Toast/Toast";

export default function App() {
  return (
    <SafeAreaProvider>
      <AppNavigation />
      <GlobalToast />
    </SafeAreaProvider>
  );
}
