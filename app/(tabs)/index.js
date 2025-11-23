import { StyleSheet, Text, View, Image } from "react-native";
import banner from "../../assets/banner.jpg"; // sua imagem grande
import logo from "../../assets/logoHobbit.jpg"; // sua logo

export default function Page() {
  return (
    <View style={styles.container}>

      {/* BANNER NO TOPO */}
      <View style={styles.bannerContainer}>
        <Image source={banner} style={styles.bannerImage} />
      </View>

      {/* LOGO SOBREPOSTA */}
      <Image source={logo} style={styles.logo} />

      {/* CONTEÚDO DO SITE */}
      <View style={styles.content}>
        <Text style={styles.title}>Arquivos de Gondor</Text>
        <Text style={styles.subtitle}>Pré-requisito para a disciplina de DDM</Text>
      </View>
    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: "#FFFAF0",
    alignItems: "center",
  },

  // IMAGEM DO TOPO
  bannerContainer: {
    width: "100%",
    height: 250,
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  // LOGO SOBREPOSTA
  logo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    position: "absolute",
    top: 200,   // controla o quanto a logo desce
    zIndex: 10,
    borderWidth: 4,
    borderColor: "#FFFAF0",
  },

  // CONTEÚDO
  content: {
    marginTop: 100, // empurra o conteúdo para baixo da logo
    alignItems: "center",
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 40,
    fontWeight: "bold",
    fontFamily: "MedievalSharp_400Regular",
    color: "#D0C060"
  },

  subtitle: {
    fontSize: 20,
    color: "#333",
    marginTop: 10,
  },
});
