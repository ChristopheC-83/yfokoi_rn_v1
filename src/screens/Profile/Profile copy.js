import { View, Text, Pressable } from "react-native";
import { s } from "./Profile.style";
import ScreenContainer from "../../components/ScreenContainer/ScreenContainer";
import { useUserStore } from "../../store/userStore";
import { supabase } from "../../lib/supabase";
import { useToastStore } from "../../store/toastStore";

export default function Profile() {
  const { showToast } = useToastStore();
  const { user, clearUser, updateUser } = useUserStore();

  async function clear() {
    if (!user?.id) return;

    const result = await clearUser(user.id);

    if (result.ok) {
      showToast(`User ${user.name} nous a quitté 🥺.`, "success");
    } else {
      showToast("Problème lors de la supression.", "danger");
      console.error(result.error);
    }
  }

  async function update() {
    if (!user?.id) return;

    const newName = "New Name 2";
    const newIcon = "👽👽👽";

    const result = await updateUser(user.id, { name: newName, icon: newIcon });

    if (result.ok) {
      showToast("Mise à Jour Ok !", "success");
      console.log(result);
      console.log("c'est ok");
    } else {
      showToast("Problème de mise à jour.", "danger");
      console.error(result.error);
    }
  }

  return (
    <ScreenContainer style={s}>

      
      <Text>
        Profile {user?.name} {user?.icon}
      </Text>
      <Pressable
        onPress={clear}
        style={{
          marginVertical: 60,
          backgroundColor: "red",
          width: "100%",
          padding: 10,
        }}
      >
        <Text>Supprimer User</Text>
      </Pressable>
      <Pressable
        onPress={update}
        style={{ backgroundColor: "green", width: "100%", padding: 10 }}
      >
        <Text>Modifier User</Text>
      </Pressable>
    </ScreenContainer>
  );
}
