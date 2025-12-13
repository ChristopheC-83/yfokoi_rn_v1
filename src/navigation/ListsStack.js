import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyLists from "../screens/MyLists/MyLists";
import ListDetails from "../screens/ListDetails/ListDetails";



const Stack = createNativeStackNavigator();


export default function ListsStack() {
    return (
      <Stack.Navigator
        initialRouteName="MyLists"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="MyLists" component={MyLists} />
        <Stack.Screen name="ListDetails" component={ListDetails} />
      </Stack.Navigator>
    );
}