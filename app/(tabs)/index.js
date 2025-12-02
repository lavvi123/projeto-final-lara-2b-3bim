import { StyleSheet, Text, View, Image, ScrollView, Platform } from "react-native";

import banner from "../../assets/condado.jpg";
import logo from "../../assets/logoHobbit.jpg";
import tolkien from "../../assets/tolkien.jpg";
import hobbit from "../../assets/livroOHobbit.jpg";
import lotr from "../../assets/senhordosaneis.jpg"; 
import couro from "../../assets/couroverde.jpg"; 

export default function Page() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View 
        style={[
          styles.container,
          Platform.OS === "web" ? { 
            backgroundImage: `url(${couro})`,
            backgroundSize: "cover",
            backgroundRepeat: "repeat"
          } : {}
        ]}
      >

       
        <View style={styles.bannerContainer}>
          <Image source={banner} style={styles.bannerImage} />
        </View>

      
        <Image source={logo} style={styles.logo} />

      
        <View style={styles.welcomeCard}>
          <Text style={styles.welcomeTitle}>Bem-vindos à Terra-Média</Text>
          <Text style={styles.welcomeText}>
            Esta é uma página criada com carinho para fãs do universo de Tolkien.
            Aqui celebramos a magia do Condado, as aventuras dos Hobbits e todo 
            o encanto da Terra-Média!
          </Text>
        </View>

       
        <View style={styles.authorStrip}>

          
          <Text style={styles.sectionTitle}>Sobre a Obra de Tolkien</Text>

         
          <Text style={styles.runes}>ᛟ ᚠ ᛞ ᚱ ᚨ ᛉ ᛟ</Text>

         
          <View style={styles.section}>
            <Image source={tolkien} style={styles.authorImage} />
            <View style={styles.authorTextBox}>
              <Text style={styles.authorName}>J. R. R. Tolkien</Text>
              <Text style={styles.authorDescription}>
                John Ronald Reuel Tolkien foi um escritor, poeta e professor 
                universitário, responsável por criar toda a mitologia da Terra-Média...
              </Text>
            </View>
          </View>

          <Text style={styles.runes}>ᛟ ᚠ ᛞ ᚱ ᚨ ᛉ ᛟ</Text>

         
          <View style={styles.section}>
            <Image source={hobbit} style={styles.authorImage} />
            <View style={styles.authorTextBox}>
              <Text style={styles.authorName}>O Hobbit</Text>
              <Text style={styles.authorDescription}>
              Bilbo Bolseiro é um hobbit que leva uma vida confortável e sem ambições. 
                Mas seu contentamento é perturbado quando Gandalf, o mago, 
                e uma companhia de anões batem à sua porta.
              </Text>
            </View>
          </View>

         
          <Text style={styles.runes}>ᛟ ᚠ ᛞ ᚱ ᚨ ᛉ ᛟ</Text>

     
          <View style={styles.section}>
            <Image source={lotr} style={styles.authorImage} />
            <View style={styles.authorTextBox}>
              <Text style={styles.authorName}>O Senhor dos Anéis</Text>
              <Text style={styles.authorDescription}>
                “O Senhor dos Anéis” acompanha a jornada de Frodo...
              </Text>
            </View>
          </View>

      
          <Text style={styles.runes}>ᛟ ᚠ ᛞ ᚱ ᚨ ᛉ ᛟ</Text>

        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d1f13", 
    alignItems: "center",
  },


  bannerContainer: {
    width: "100%",
    height: Platform.OS === "web" ? 260 : 320,
    overflow: "hidden",
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

 
  logo: {
    width: Platform.OS === "web" ? 200 : 160,
    height: Platform.OS === "web" ? 200 : 160,
    borderRadius: 100,
    marginTop: Platform.OS === "web" ? -100 : -80,
    borderWidth: 6,
    borderColor: "#d4af37",
    backgroundColor: "#fff",
    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },

  
  welcomeCard: {
    marginTop: 25,
    backgroundColor: "rgba(232, 220, 194, 0.95)",
    padding: 28,
    borderRadius: 20,
    width: Platform.OS === "web" ? "65%" : "90%",
    maxWidth: 850,
    borderWidth: 3,
    borderColor: "#b08d57",
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
    fontSize: Platform.OS === "web" ? 22 : 18,
    color: "#4A3B24",
    textAlign: "center",
    fontFamily: "serif",
    lineHeight: 30,
  },


  authorStrip: {
    backgroundColor: "rgba(232, 220, 194, 0.94)",
    borderTopWidth: 4,
    borderBottomWidth: 4,
    borderColor: "#b89a55",
    width: "100%",
    padding: 25,
    marginTop: 35,
  },

  
  sectionTitle: {
    fontFamily: "MedievalSharp_400Regular",
    fontSize: Platform.OS === "web" ? 40 : 32,
    textAlign: "center",
    color: "#5A421B",
    marginBottom: 20,
    letterSpacing: 2,
  },


  section: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
    backgroundColor: "#f2e6cf",
    padding: 16,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#b89a55",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 6,
  },

  authorImage: {
    width: Platform.OS === "web" ? 170 : 130,
    height: Platform.OS === "web" ? 170 : 130,
    borderRadius: 12,
    borderWidth: 4,
    borderColor: "#b08d57",
    marginRight: 20,
  },

  authorTextBox: {
    flex: 1,
  },

  authorName: {
    fontSize: Platform.OS === "web" ? 34 : 26,
    fontFamily: "MedievalSharp_400Regular",
    color: "#5A421B",
    marginBottom: 10,
  },

  authorDescription: {
    fontSize: Platform.OS === "web" ? 20 : 16,
    color: "#4A3B24",
    fontFamily: "serif",
    lineHeight: 26,
  },


  runes: {
    textAlign: "center",
    fontSize: Platform.OS === "web" ? 28 : 22,
    marginVertical: 18,
    color: "#7a633d",
    letterSpacing: 6,
    fontFamily: "serif",
    opacity: 0.9,
  },
});
