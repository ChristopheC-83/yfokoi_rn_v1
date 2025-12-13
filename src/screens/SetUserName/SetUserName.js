import { View, TextInput, Pressable, Text } from "react-native";
import { s } from "./SetUserName.style";
import ScreenContainer from "../../components/ScreenContainer/ScreenContainer";
import Header from "../../components/Header/Header";
import { useState } from "react";
import { emojiList } from "../../datas/emojiList";
import { useToastStore } from "../../store/toastStore";
import GlobalToast from "../../components/Toast/Toast";
import { useUserStore } from "../../store/userStore";

export default function SetUserName() {
  const showToast = useToastStore((state) => state.showToast);
  const createUser = useUserStore((state) => state.createUser);
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("");

  async function handleSubmit() {
    if (!name.trim() || !icon) {
      showToast("Renseigne un Pseuso et un Emoji !", "danger");
      return;
    }
    setName(name.trim());
    setIcon(icon.trim());
    const result =await createUser(name.trim(), icon);
    if (result.ok) {
      showToast(`Bienvenue ${name} !`, "success");
    } else {
      showToast("Erreur lors de la création ❌", "danger");
      console.error(result.error);
    }
  }
  return (
    <ScreenContainer style={s}>
      <GlobalToast />
      <Header text1="Bienvenue dans Yfokoi !" text2="Présente toi !" />
      <View style={s.container}>
        <Text style={s.title}>Ton pseudo ?</Text>
        <TextInput
          placeholder="Pseudo"
          value={name}
          onChangeText={setName}
          style={{
            borderWidth: 1,
            padding: 12,
            borderRadius: 8,
            marginBottom: 20,
          }}
        />
        <Text style={s.title}>Ton étendard ?</Text>
        <View style={s.iconsContainer}>
          {emojiList.map((emoji, index) => {
            const selected = icon === emoji;
            return (
              <Pressable
                key={index}
                onPress={() => setIcon(emoji)}
                style={[
                  s.icon,
                  selected && {
                    borderColor: "#000",
                    borderWidth: 2,
                    backgroundColor: "#ddd",
                    padding: 9,
                  },
                ]}
              >
                <Text style={s.iconText}>{emoji}</Text>
              </Pressable>
            );
          })}
        </View>
        <Pressable
          onPress={handleSubmit}
          style={{
            backgroundColor: "#000",
            padding: 14,
            borderRadius: 8,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}>Valider</Text>
        </Pressable>
        <Text style={s.subText}>Tu pourras modifier plus tard 😉</Text>
      </View>
    </ScreenContainer>
  );
}
