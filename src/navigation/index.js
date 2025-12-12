import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../screens/Profile/Profile";
import MyLists from "../screens/MyLists/MyLists";
import SharedList from "../screens/SharedList/SharedList";
import TabIcon from "./components/TabIcon";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Platform } from "react-native";

const Tabs = createBottomTabNavigator();
const TAB_HEIGHT = Platform.OS === "ios" ? 80 : 70;

export default function AppNavigation() {
  const insets = useSafeAreaInsets();
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: tabBarStyle(insets.bottom),
        }}
      >
        <Tabs.Screen
          name="Partagée"
          component={SharedList}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon="share-social" label="Partagée" />
            ),
          }}
        />
        <Tabs.Screen
          name="Mes Listes"
          component={MyLists}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon="list" label="Mes Listes" />
            ),
          }}
        />
        <Tabs.Screen
          name="Profil"
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon="person" label="Profil" />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

//  style de la navbar
const tabBarStyle = (insetsBottom) => ({
  backgroundColor: "#fff",
  borderTopWidth: 0,
  elevation: 5,
  height: TAB_HEIGHT + insetsBottom,
  paddingBottom: insetsBottom,
  paddingTop: 10,
  ...Platform.select({
    ios: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: -3 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
    },
  }),
});
