import { Pressable, View, Text, TextInput, Alert } from "react-native";
import { s } from "./OneList.style";
import { useState } from "react";
import { useListStore } from "../../../../store/listsStore";
import { useToastStore } from "../../../../store/toastStore";
import OneListEdit from "./OneListEdit";

export default function OneList({ id, name }) {
  const { showToast } = useToastStore();
  const { updateList, deleteList, editingListId, setEditingListId } =
    useListStore();

  const inputChangeName = editingListId === id;

  function handleDeleteList(id, name) {
    if (!id) return;
    setEditingListId(null);
    Alert.alert(
      "Confirmer la suppression",
      "Es-tu sûr de vouloir supprimer cette liste ? Cette action est irréversible !",
      [
        {
          text: "Annuler",
          style: "cancel",
        },
        {
          text: "Supprimer",
          style: "destructive",
          onPress: () => {
            deleteList(id);
            showToast(`Liste ${name} supprimée !`, "success");
          },
        },
      ],
      { cancelable: true }
    );
  }

  if (inputChangeName) {
    return <OneListEdit id={id} name={name} />;
  }

  return (
    <View style={s.oneList}>
      <Text style={s.name}>➡️ {name}</Text>
      <View style={s.actions}>
        <Pressable
          onPress={() => {
            setEditingListId(id);
          }}
        >
          <Text style={s.action}>🖋️</Text>
        </Pressable>
        <Pressable onPress={() => handleDeleteList(id, name)}>
          <Text style={s.action}>🗑️</Text>
        </Pressable>
      </View>
    </View>
  );
}
