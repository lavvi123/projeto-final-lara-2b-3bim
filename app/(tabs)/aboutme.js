import { StyleSheet, Text, View, Image, Platform } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>

    
        <Image
          source={require('../../assets/lara.jpg')}
          style={styles.avatar}
        />

        
        <Text style={styles.title}>Lara Lavínia Harder</Text>
        <View style={styles.separator} />

        <Text style={styles.info}><Text style={styles.label}>Idade:</Text> 17 anos</Text>
        <Text style={styles.info}><Text style={styles.label}>Gênero:</Text> Feminino</Text>
        <Text style={styles.info}>
          <Text style={styles.label}>Interesses:</Text> Yoga, escrita, poesia, storytelling
        </Text>
        <Text style={styles.info}>
          <Text style={styles.label}>Projetos:</Text> Fã-site de Tolkien e História da Arte
        </Text>

        
        <View style={styles.bioBox}>
          <Text style={styles.bioText}>
            Amante de mundos imaginários, arte clássica e narrativas profundas. 
            Busca transformar criatividade em projetos que inspirem outras pessoas.
          </Text>
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
    backgroundColor: "#e9e4d8",
  },

  
  card: {
    width: Platform.OS === "web" ? "50%" : "90%",
    maxWidth: 600,
    backgroundColor: "#f7f2e7",
    borderRadius: 20,
    padding: 26,

    borderWidth: 2,
    borderColor: "#c2a878",

    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },

    elevation: 8,
    alignItems: "center",
  },


  avatar: {
    width: 160,
    height: 160,
    borderRadius: 80,
    marginBottom: 18,
    borderWidth: 4,
    borderColor: "#c2a878",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },


  title: {
    fontSize: 34,
    fontFamily: "serif",
    fontWeight: "bold",
    color: "#3e2f1c",
    marginBottom: 8,
    textAlign: "center",
  },


  separator: {
    width: "70%",
    height: 2,
    backgroundColor: "#c2a878",
    marginVertical: 14,
    borderRadius: 10,
  },

 
  info: {
    fontSize: 18,
    color: "#4b3a26",
    marginVertical: 5,
    textAlign: "center",
    lineHeight: 24,
  },

  label: {
    fontWeight: "bold",
    color: "#3e2f1c",
  },

 
  bioBox: {
    marginTop: 18,
    backgroundColor: "#fbf7ee",
    padding: 18,
    borderRadius: 14,
    borderLeftWidth: 4,
    borderLeftColor: "#c2a878",
  },

  bioText: {
    color: "#4b3a26",
    fontSize: 16,
    lineHeight: 22,
    textAlign: "center",
    fontStyle: "italic",
  },
});
