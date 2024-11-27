import { View, Text, StyleSheet } from "react-native";
import { router, useGlobalSearchParams } from "expo-router";

export default function Produto() {
  const params = useGlobalSearchParams();
  console.log(params.id);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Produto</Text>
      <Text style={styles.title}>{params.id}</Text>

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
