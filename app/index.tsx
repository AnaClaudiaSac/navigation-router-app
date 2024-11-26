import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello world!</Text>

      <Link href={"/profile"}>Ir para profile</Link>
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
