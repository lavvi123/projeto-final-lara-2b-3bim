import { StyleSheet, Text, View, Image, ScrollView, Platform } from "react-native";
import banner from "../../assets/iconBarroco.jpg";
import logo from "../../assets/icon.jpg";

import pintura from "../../assets/pinturaRupestre.jpg";
import gregos from "../../assets/grecia.jpg";
import medieval from "../../assets/medieval.jpg";
import renascentista from "../../assets/renascentista.jpg";
import modernismo from "../../assets/moderna.jpg";

export default function Page() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>

   
        <View style={styles.bannerContainer}>
          <Image
            source={banner}
            style={[
              styles.bannerImage,
              Platform.OS === "web" && styles.bannerWeb,
            ]}
          />
        </View>

        <View style={styles.divider} />

       
        <Image source={logo} style={styles.logo} />

      
        <View style={styles.welcomeCard}>
          <Text style={styles.welcomeTitle}>História da Arte</Text>
          <Text style={styles.welcomeText}>
            A História da Arte é a narrativa visual da humanidade — um trajeto 
            marcado por formas, cores e emoções que ecoam o espírito de cada época.
            Da luz das cavernas ao brilho das vanguardas, a arte revela quem fomos,
            quem somos e quem desejamos ser.
          </Text>
        </View>

       

        <View style={styles.sectionCard}>
          <Image source={pintura} style={styles.sectionImage} />
          <Text style={styles.sectionTitle}>Arte Pré-Histórica</Text>
          <Text style={styles.sectionText}>
            Surgiu nas cavernas como forma de expressão e registro. Pinturas 
            rupestres e esculturas simples revelam a ligação espiritual entre 
            o ser humano e a natureza.
          </Text>
        </View>

        <View style={styles.sectionCard}>
          <Image source={gregos} style={styles.sectionImage} />
          <Text style={styles.sectionTitle}>Egito e Antiguidade</Text>
          <Text style={styles.sectionText}>
            No Egito, arte era eternidade. Na Grécia e Roma, nasceu a busca pela 
            proporção perfeita, pela forma ideal e pela harmonia que ainda inspira 
            a arte ocidental.
          </Text>
        </View>

        <View style={styles.sectionCard}>
          <Image source={medieval} style={styles.sectionImage} />
          <Text style={styles.sectionTitle}>Idade Média</Text>
          <Text style={styles.sectionText}>
            Marcada pela fé, a arte medieval transformou símbolos religiosos
            em vitrais, mosaicos e catedrais que elevavam o olhar ao divino.
          </Text>
        </View>

        <View style={styles.sectionCard}>
          <Image source={renascentista} style={styles.sectionImage} />
          <Text style={styles.sectionTitle}>Renascimento</Text>
          <Text style={styles.sectionText}>
            Com foco no humanismo e na ciência, artistas como Leonardo e Michelangelo 
            redefiniram a compreensão da beleza, luz e perspectiva.
          </Text>
        </View>

        <View style={styles.sectionCard}>
          <Image source={modernismo} style={styles.sectionImage} />
          <Text style={styles.sectionTitle}>Modernismo e Vanguardas</Text>
          <Text style={styles.sectionText}>
            No século XX, a arte rompeu limites. O Impressionismo, o Cubismo e o 
            Surrealismo desafiaram a realidade e abriram portas para novas formas 
            de expressão.
          </Text>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(185, 148, 78)",
    alignItems: "center",
    paddingBottom: 40,
  },

  bannerContainer: {
    width: "100%",
    height: 260,
    overflow: "hidden",
  },

  bannerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  bannerWeb: {
    height: 380,
  },

  divider: {
    width: "100%",
    height: 4,
    backgroundColor: "rgb(255, 239, 206)",
  },

  logo: {
    width: 140,
    height: 140,
    borderRadius: 75,
    marginTop: -70,
    borderWidth: 4,
    borderColor: "rgb(255, 239, 206)",
    zIndex: 5,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },

  welcomeCard: {
    marginTop: 25,
    backgroundColor: "rgb(255, 239, 206)",
    padding: 28,
    borderRadius: 20,
    width: Platform.OS === "web" ? "60%" : "90%",
    maxWidth: 850,
    borderWidth: 3,
    borderColor: "rgb(214, 190, 150)",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 8,
  },

  welcomeTitle: {
    fontSize: Platform.OS === "web" ? 44 : 36,
    fontFamily: "MedievalSharp_400Regular",
    color: "#C9AF5A",
    textAlign: "center",
    marginBottom: 12,
  },

  welcomeText: {
    fontSize: 18,
    textAlign: "center",
    color: "#6E5A30",
    lineHeight: 26,
    fontFamily: "serif",
  },

  
  sectionCard: {
    marginTop: 25,
    backgroundColor: "rgb(255, 239, 206)",
    padding: 20,
    borderRadius: 16,
    width: Platform.OS === "web" ? "65%" : "92%",
    maxWidth: 900,
    borderWidth: 2,
    borderColor: "rgb(214, 190, 150)",
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 6,
  },

  sectionImage: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    marginBottom: 12,
    resizeMode: "cover",

    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },

  sectionTitle: {
    fontSize: 28,
    fontFamily: "MedievalSharp_400Regular",
    color: "#B6894A",
    marginBottom: 6,
    textAlign: "center",
  },

  sectionText: {
    fontSize: 17,
    lineHeight: 25,
    color: "#6A5630",
    textAlign: "center",
    fontFamily: "serif",
  },
});
