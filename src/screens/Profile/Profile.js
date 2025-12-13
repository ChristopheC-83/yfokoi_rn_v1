import {
  View,
  Text,
  Pressable,
  Alert,
  TextInput,
  ScrollView,
} from "react-native";
import { s } from "./Profile.style";
import ScreenContainer from "../../components/ScreenContainer/ScreenContainer";
import { useUserStore } from "../../store/userStore";
import { supabase } from "../../lib/supabase";
import { useToastStore } from "../../store/toastStore";
import Header from "../../components/Header/Header";
import { useState } from "react";
import { emojiList } from "../../datas/emojiList";

export default function Profile() {
  const { showToast } = useToastStore();
  const { user, clearUser, updateUser } = useUserStore();

  const [name, setName] = useState(user?.name);
  const [icon, setIcon] = useState(user?.icon);

  async function update() {
    if (!user?.id) return;

    const result = await updateUser(user.id, { name, icon });
    if (result.ok) {
      showToast("Mise à Jour Ok !", "success");
    } else {
      showToast("Problème lors de la mise à jour.", "danger");
      console.error(result.error);
    }
  }

  function confirmDelete() {
    if (!user?.id) return;

    Alert.alert(
      "Confirmer la suppression",
      "Es-tu sûr de vouloir supprimer ton compte ? Cette action est irréversible ! Tes listes et son contenu disparaitront. Ce qui est dans la/les liste(s) partagées ne disparaitra pas.",
      [
        {
          text: "Annuler",
          style: "cancel",
        },
        {
          text: "Supprimer",
          style: "destructive",
          onPress: async () => {
            const result = await clearUser(user.id);
            if (result.ok) {
              showToast("Compte supprimé", "info");
            } else {
              showToast("Erreur lors de la suppression", "danger");
              console.error(result.error);
            }
          },
        },
      ],
      { cancelable: true }
    );
  }

  return (
    <ScreenContainer style={s}>
      <ScrollView>
        <Header
          text1={`${user?.icon} ${user?.name} sur Yfokoi !`}
          text2="Gestion de ton profil 🫵"
        />
        <View style={s.container}>
          <Text style={s.title}>
            Bonjour {user?.name} {user?.icon}
          </Text>
          <Text style={s.label}>Un nouveau Pseudo ?</Text>
          <TextInput
            placeholder="Pseudo"
            value={name}
            onChangeText={setName}
            style={s.inputName}
          />
          <Text style={s.label}>Un nouvel Icone ?</Text>
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
          <Pressable onPress={update} style={s.button}>
            <Text style={s.updateBtn}>Mettre à Jour</Text>
          </Pressable>
        </View>
        <Pressable onPress={confirmDelete}>
          <Text style={s.deleteBtn}>Supprimer mon compte</Text>
        </Pressable>
      </ScrollView>
    </ScreenContainer>
  );
}
