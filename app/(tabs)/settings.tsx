import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <Link href={"/profile"}>Ir para profile</Link>

      <Link href={{ pathname: "./product/[id]", params: { id: "2" } }}>
        Ver Produto
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },

  title: {
    fontSize: 64,
    fontWeight: "bold",
    color: "#000",
  },
});
