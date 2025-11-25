import { StyleSheet, Text, View, Image, ScrollView, Platform } from "react-native";

import banner from "../../assets/condado.jpg";
import logo from "../../assets/logoHobbit.jpg";
import tolkien from "../../assets/tolkien.jpg";
import hobbit from "../../assets/livroOHobbit.jpg";
import lotr from "../../assets/senhordosaneis.jpg"; // <-- NOVA IMAGEM

export default function Page() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>

        {/* Banner topo */}
        <View style={styles.bannerContainer}>
          <Image source={banner} style={styles.bannerImage} />
        </View>

        {/* Logo sobreposta */}
        <Image source={logo} style={styles.logo} />

        {/* Card de apresentação */}
        <View style={styles.welcomeCard}>
          <Text style={styles.welcomeTitle}>Bem-vindos à Terra-Média</Text>
          <Text style={styles.welcomeText}>
            Esta é uma página criada com carinho para fãs do universo de Tolkien.
            Aqui celebramos a magia do Condado, as aventuras dos Hobbits e todo 
            o encanto da Terra-Média!
          </Text>
        </View>

        {/* Faixa Tolkien + Livros */}
        <View style={styles.authorStrip}>

          {/* BLOCO Tolkien */}
          <View style={styles.section}>
            <Image source={tolkien} style={styles.authorImage} />

            <View style={styles.authorTextBox}>
              <Text style={styles.authorName}>J. R. R. Tolkien</Text>
              <Text style={styles.authorDescription}>
                John Ronald Reuel Tolkien foi um escritor, poeta e professor 
                universitário, responsável por criar toda a mitologia da Terra-Média. 
                Com uma imaginação incomparável, ele concebeu línguas, povos, mapas 
                e histórias que se tornaram um dos universos de fantasia mais 
                influentes de todos os tempos.
              </Text>
            </View>
          </View>

          {/* BLOCO O Hobbit */}
          <View style={styles.section}>
            <Image source={hobbit} style={styles.authorImage} />

            <View style={styles.authorTextBox}>
              <Text style={styles.authorName}>O Hobbit</Text>
              <Text style={styles.authorDescription}>
                “O Hobbit” conta a jornada de Bilbo Bolseiro, um hobbit pacato que 
                é inesperadamente arrastado para uma aventura ao lado de treze anões 
                e do mago Gandalf. Eles partem para recuperar o tesouro guardado pelo 
                temível dragão Smaug, iniciando assim a história que precede os eventos 
                de “O Senhor dos Anéis”.
              </Text>
            </View>
          </View>

          {/* BLOCO O Senhor dos Anéis */}
          <View style={styles.section}>
            <Image source={lotr} style={styles.authorImage} />

            <View style={styles.authorTextBox}>
              <Text style={styles.authorName}>O Senhor dos Anéis</Text>
              <Text style={styles.authorDescription}>
                “O Senhor dos Anéis” é uma história épica que acompanha a jornada de 
                Frodo Bolseiro, encarregado de destruir o Um Anel — um artefato maligno 
                criado por Sauron para dominar toda a Terra-Média. A aventura envolve 
                amizade, coragem e batalhas colossais, sendo uma das obras mais 
                influentes da literatura fantástica.
              </Text>
            </View>
          </View>

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

  /* Banner */
  bannerContainer: {
    width: "100%",
    height: Platform.OS === "web" ? 200 : 260,
    overflow: "hidden",
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  /* Logo */
  logo: {
    width: Platform.OS === "web" ? 180 : 150,
    height: Platform.OS === "web" ? 180 : 150,
    borderRadius: 100,
    marginTop: Platform.OS === "web" ? -90 : -70,
    borderWidth: 5,
    borderColor: "#d4af37",
    zIndex: 5,
  },

  /* Card Boas-Vindas */
  welcomeCard: {
    marginTop: 25,
    backgroundColor: "#E8DCC2",
    padding: 25,
    borderRadius: 18,
    width: Platform.OS === "web" ? "60%" : "90%",
    maxWidth: 800,
    borderWidth: 3,
    borderColor: "#8B6F47",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 6,
  },
  welcomeTitle: {
    fontSize: Platform.OS === "web" ? 42 : 36,
    fontFamily: "MedievalSharp_400Regular",
    color: "#BFA64C",
    textAlign: "center",
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: Platform.OS === "web" ? 22 : 18,
    color: "#4A3B24",
    textAlign: "center",
    fontFamily: "serif",
    lineHeight: 30,
  },

  /* Faixa Tolkien + Livros */
  authorStrip: {
    backgroundColor: "#E8DCC2",
    borderTopWidth: 3,
    borderBottomWidth: 3,
    borderColor: "#8B6F47",
    width: "100%",
    padding: 20,
    marginTop: 35,
  },

  /* Cada bloco dentro da faixa */
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },
  authorImage: {
    width: Platform.OS === "web" ? 160 : 120,
    height: Platform.OS === "web" ? 160 : 120,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#8B6F47",
    marginRight: 20,
  },
  authorTextBox: {
    flex: 1,
  },
  authorName: {
    fontSize: Platform.OS === "web" ? 34 : 28,
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
});

