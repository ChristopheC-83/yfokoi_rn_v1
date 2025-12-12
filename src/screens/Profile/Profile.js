import { View, Text, Pressable } from "react-native";
import { s } from "./Profile.style";
import ScreenContainer from "../../components/ScreenContainer/ScreenContainer";
import { useUserStore } from "../../store/userStore";

export default function Profile() {
  const { user,clearUser } = useUserStore();
  return (
    <ScreenContainer style={s}>
      <Text>Profile {user?.name} {user?.icon}</Text>
      <Pressable onPress={() => clearUser()}>
        <Text>Supprimer User</Text>
      </Pressable>
    </ScreenContainer>
  );
}
