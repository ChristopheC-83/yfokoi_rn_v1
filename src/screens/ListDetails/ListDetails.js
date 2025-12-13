import { View, Text } from "react-native";
import { s } from "./ListDetails.style";
import ScreenContainer from "../../components/ScreenContainer/ScreenContainer";
import Header from "../../components/Header/Header";
import { useUserStore } from "../../store/userStore";

export default function ListDetails({ route }) {
  const { user } = useUserStore();
  const { id, name } = route.params;
  return (
    <ScreenContainer style={s}>
      <Header
        text1={`${user?.icon} ${user?.name}, Yfokoi ? pour toi !`}
        text2="Mes listes personnelles 🔒"
      />

      <Text>listId: {name}</Text>
      <Text>input</Text>
      <Text>list des items isDone false avec delete</Text>
      <Text>list des items isDone true avec delete</Text>
      <Text>btn delete all isDone</Text>
    </ScreenContainer>
  );
}
