import { FlatList, View, Text, TextInput, Pressable } from "react-native";
import { s } from "./MyLists.style";
import ScreenContainer from "../../components/ScreenContainer/ScreenContainer";
import { useUserStore } from "../../store/userStore";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import { useListStore } from "../../store/listsStore";
import { useToastStore } from "../../store/toastStore";
import OneList from "./components/OneList/OneList";

export default function MyLists() {
  const { showToast } = useToastStore();
  const { lists, addList, setEditingListId, loadLists } = useListStore();
  const { user } = useUserStore();
  const [newListName, setNewListName] = useState("");

  function handleSubmit() {
    if (!newListName.trim()) {
      showToast("Renseigne un nom pour cette liste !", "warning");
      return;
    }

    const name = newListName.trim();
    addList(name);
    showToast(`Liste ${name} ajoutée !`, "success");
    setNewListName("");
  }

  useEffect(() => {
    loadLists(); 
  }, []);

  return (
    <ScreenContainer style={s}>
      <Header
        text1={`${user?.icon} ${user?.name}, Yfokoi ? pour toi !`}
        text2="Mes listes personnelles 🔒"
      />
      <View style={s.addContainer}>
        <TextInput
          placeholder="nouvelle liste"
          value={newListName}
          onChangeText={setNewListName}
          style={s.addInput}
          // validation par clavier
          onSubmitEditing={handleSubmit}
          returnKeyType="done"
          // on ferme le clavier si true, false pour garder le clavier ouvert pour ecrire à la volée
          blurOnSubmit={true}
          onPress={() => setEditingListId(null)}
        />

        <Pressable onPress={handleSubmit} style={s.addBtn}>
          <Text style={s.textAddBtn}>Ajouter</Text>
        </Pressable>
      </View>
      {lists.length === 0 ? (
        <View style={s.noListContainer}>
          <Text style={s.title}>🔼 Crée ta 1ère liste 🔼</Text>
        </View>
      ) : (
        <>
          <Text style={s.title}>Mes Listes</Text>
          <FlatList
            data={lists}
            keyExtractor={(list) => list.id}
            renderItem={({ item }) => (
              <OneList {...item} />
            )}
          />
        </>
      )}
    </ScreenContainer>
  );
}
