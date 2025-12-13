import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  oneList: {
    width: "90%",
    height: 60,
    alignSelf: "center",
    maxWidth: 400,
    marginVertical: 5,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    elevation: 2,
  },
  name: { flex: 1, fontSize: 16, fontWeight: "bold" },
  actions: { flexDirection: "row", gap: 5, alignItems: "center" },
  action: {
    fontSize: 18,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 5,
    borderRadius: 8,
  },
});
