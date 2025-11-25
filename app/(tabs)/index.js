import { StyleSheet, Text, View, Image } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image 
          source={require('../../assets/logo.jpg')}
          style={styles.logo}
        />

        <Text style={styles.title}>Guardião da Terra-Média</Text>
        <Text style={styles.subtitle}>Pré-requisito para a disciplina de DDM</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#1f2d16", // verde-floresta escuro
  },

  // CARD ESTILO "PERGAMINHO"
  card: {
    backgroundColor: "#f5e6c8", // pergaminho claro
    padding: 30,
    borderRadius: 20,
    alignItems: "center",
    width: "85%",
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 8,
    borderWidth: 3,
    borderColor: "#b48a4f", // dourado envelhecido
  },

  // IMAGEM CIRCULAR COM AURA DOURADA
  logo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: "#b48a4f",
    marginBottom: 20,
  },

  // TÍTULO COM FONTE MEDIEVAL
  title: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    color: "#4a3b19",
    marginBottom: 10,
    fontFamily: "medieval", // << FONTE MEDIEVAL APLICADA
  },

  subtitle: {
    fontSize: 20,
    color: "#6c5a2e",
    textAlign: "center",
  },
});
