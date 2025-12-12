import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: { padding: 20, paddingTop: 60 },
  title: { fontSize: 22, marginBottom: 20 },
  iconsContainer: { flexWrap: "wrap", flexDirection: "row", paddingBottom: 30 },
  icon: {
    margin: 5,
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    },
  iconText:{ fontSize: 28 },
    subText: {
        textAlign: "center",
        color: "#777",
        marginTop: 20,
  }
});
