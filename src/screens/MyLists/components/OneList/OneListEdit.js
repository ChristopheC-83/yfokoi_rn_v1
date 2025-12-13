import { Pressable,View, Text, TextInput } from "react-native";
import { s } from "./OneList.style";
import { useToastStore } from "../../../../store/toastStore";
import { useListStore } from "../../../../store/listsStore";
import { useState } from "react";

export default function OneListEdit({id, name}) {
  const { showToast } = useToastStore();
  const { updateList, deleteList, editingListId, setEditingListId } =
    useListStore();
  const [newName, setNewName] = useState(name);

  function handleNameList() {
    const trimmed = newName.trim();
    if (!trimmed) {
      setEditingListId(null);
      setNewName(name);
      showToast("Renseigne un nom pour cette liste !", "warning");
      return;
    }
    updateList(id, trimmed);
    setEditingListId(null);
    if (trimmed !== name)
      showToast(`Liste renommée en ${trimmed} !`, "success");
  }

  return (
    <View style={s.oneList}>
      <TextInput
        placeholder={name}
        value={newName}
        onChangeText={setNewName}
        autoFocus
        onSubmitEditing={handleNameList}
        returnKeyType="done"
      />
      <View style={s.actions}>
        <Pressable onPress={handleNameList}>
          <Text style={s.action}>✅</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            setEditingListId(null);
          }}
        >
          <Text style={s.action}>❌</Text>
        </Pressable>
      </View>
    </View>
  );
}
