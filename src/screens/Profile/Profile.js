import { View, Text, Pressable } from "react-native";
import { s } from "./Profile.style";
import ScreenContainer from "../../components/ScreenContainer/ScreenContainer";
import { useUserStore } from "../../store/userStore";
import { supabase } from "../../lib/supabase";

export default function Profile() {
  const { user, clearUser, updateUser } = useUserStore();

  async function clear() {
    if (!user?.id) return;

    await clearUser( user.id );

    
  }

  async function update() {
    if (!user?.id) return;
    const newName = "New Name";
    const newIcon = "👽";

    await updateUser(  user.id, {name: newName, icon: newIcon });



  }




  return (
    <ScreenContainer style={s}>
      <Text>
        Profile {user?.name} {user?.icon}
      </Text>
      <Pressable onPress={clear} style={{marginVertical:60}}>
        <Text>Supprimer User</Text>
      </Pressable>
      <Pressable onPress={update}>
        <Text>Modifier User</Text>
      </Pressable>
    </ScreenContainer>
  );
}
