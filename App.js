import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigation from "./src/navigation";
import GlobalToast from "./src/components/Toast/Toast";
import { useEffect } from "react";
import SetUserName from "./src/screens/SetUserName/SetUserName";
import { Text, View } from "react-native";
import { useUserStore } from "./src/store/userStore";

export default function App() {
  const { user, loadUser, loading } = useUserStore();

   useEffect(() => {
     loadUser(); // 👉 on charge depuis AsyncStorage ici, UNE FOIS
   }, []);

  if (loading)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Chargement...</Text>
      </View>
    );
  

  return (
    <SafeAreaProvider>
      {user ? <AppNavigation /> : <SetUserName />}
      <GlobalToast />
    </SafeAreaProvider>
  );
}
