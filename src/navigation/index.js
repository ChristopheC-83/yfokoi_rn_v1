import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../screens/Profile/Profile";
import MyLists from "../screens/MyLists/MyLists";
import SharedList from "../screens/SharedList/SharedList";

const Tabs = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Tabs.Navigator screenOptions={{ headerShown: false }}>
        <Tabs.Screen name="Partagée" component={SharedList} icon={() => null} />
        <Tabs.Screen name="Mes Listes" component={MyLists} />
        <Tabs.Screen name="Profil" component={Profile} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
