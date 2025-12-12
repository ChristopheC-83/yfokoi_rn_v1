import { View, Text, Pressable } from "react-native";
import { s } from "./Profile.style";
import ScreenContainer from "../../components/ScreenContainer/ScreenContainer";
import { useUserStore } from "../../store/userStore";
import { supabase } from "../../lib/supabase";

export default function Profile() {
  const { user, clearUser } = useUserStore();

  async function clear() {
    if (!user?.id) return;

    // 1️⃣ Suppression locale
    await clearUser();

    // 2️⃣ Suppression Supabase par id
    const { error } = await supabase.from("users").delete().eq("id", user.id);
    if (error) console.error("Supabase delete error:", error);
  }
  return (
    <ScreenContainer style={s}>
      <Text>
        Profile {user?.name} {user?.icon}
      </Text>
      <Pressable onPress={clear}>
        <Text>Supprimer User</Text>
      </Pressable>
    </ScreenContainer>
  );
}
