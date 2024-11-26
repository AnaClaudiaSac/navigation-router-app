import { View, Text, StyleSheet, Button } from "react-native";
import { router } from "expo-router";
("expo-router");

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text onPress={() => router.back()}>Voltar para o Index</Text>
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
