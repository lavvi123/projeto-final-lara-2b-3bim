import { StyleSheet, Text, View, Image } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>

       

        <Image
          source={require('../../assets/lara.jpg')}
          style={styles.avatar}
        />
        <Text style={styles.title}>Lara Lavínia Harder</Text>
        <Text style={styles.info}>Idade: 17 anos</Text>
        <Text style={styles.info}>Gênero: Feminino</Text>
        <Text style={styles.info}>Interesses: Yoga, escrita, poesia, storytelling</Text>
        <Text style={styles.info}>Projetos: Site para fãs de Tolkien e História da Arte </Text>
      <View style={styles.main}>
        
      </View>
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
    backgroundColor: "#e9e4d8", // tom pergaminho
  },
  card: {
    width: "90%",
    backgroundColor: "#f7f2e7",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
    borderWidth: 2,
    borderColor: "#c2a878", // dourado suave estilo LOTR
    alignItems: "center",
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: "#c2a878",
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 10,
    color: "#3e2f1c",
    fontFamily: "serif",
  },
  info: {
    fontSize: 18,
    color: "#4b3a26",
    marginVertical: 4,
    textAlign: "center",
  },
});