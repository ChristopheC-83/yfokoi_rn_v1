import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../screens/Profile/Profile";
import MyLists from "../screens/MyLists/MyLists";
import SharedList from "../screens/SharedList/SharedList";
import TabIcon from "./components/TabIcon";

const Tabs = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#fff",
            borderTopWidth: 0,
            elevation: 5,
            height: 100,
            paddingBottom: 10,
            paddingTop: 10,
          },
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
