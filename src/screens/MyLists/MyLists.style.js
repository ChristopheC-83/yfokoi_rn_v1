import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  addContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginVertical: 10,
    gap: 5,
    paddingHorizontal: 10,
  },
  addInput: {
    flex: 1,
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
  },
  addBtn: {
    backgroundColor: "#000",
    padding: 12,
    borderRadius: 8,
  },
    textAddBtn: { color: "#fff", fontWeight: "bold" },
  title:{
    textAlign: "center",
    fontSize: 22,
    marginVertical: 20,
    fontWeight: "bold",
    },
});
