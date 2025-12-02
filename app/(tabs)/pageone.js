import { StyleSheet, Text, View, Image, ScrollView, Platform } from "react-native";
import banner from "../../assets/iconBarroco.jpg";
import logo from "../../assets/icon.jpg";

import pintura from "../../assets/pinturaRupestre.jpg";
import gregos from "../../assets/grecia.jpg";
import medieval from "../../assets/medieval.jpg";
import renascentista from "../../assets/renascentista.jpg";
import modernismo from "../../assets/moderna.jpg";


import barroco from "../../assets/barroco.jpg";
import romantismo from "../../assets/romantismo.jpg";
import contemporanea from "../../assets/contemporanea.jpg";

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
            A História da Arte é a narrativa visual da humanidade — um percurso 
            marcado por cores, símbolos, técnicas e transformações culturais. 
            Cada pincelada revela crenças, descobertas científicas, movimentos 
            sociais e a forma como diferentes civilizações compreenderam o mundo.
          </Text>
        </View>


        <View style={styles.sectionCard}>
          <Image source={pintura} style={styles.sectionImage} />
          <Text style={styles.sectionTitle}>Arte Pré-Histórica</Text>
          <Text style={styles.sectionText}>
            A primeira forma de arte conhecida. As pinturas rupestres funcionavam 
            como rituais, registros de caça e comunicação simbólica. 
            As esculturas como a "Vênus de Willendorf" revelam espiritualidade e 
            relação com fertilidade.
          </Text>
        </View>

        <View style={styles.sectionCard}>
          <Image source={gregos} style={styles.sectionImage} />
          <Text style={styles.sectionTitle}>Egito, Grécia e Roma</Text>
          <Text style={styles.sectionText}>
            O Egito desenvolveu uma arte marcada pela simetria e religiosidade, 
            voltada para a vida após a morte. Já Grécia e Roma valorizaram a 
            perfeição anatômica, a proporção e a harmonia — bases para toda a arte 
            ocidental. Nasce aqui o ideal de Beleza Clássica.
          </Text>
        </View>

        <View style={styles.sectionCard}>
          <Image source={medieval} style={styles.sectionImage} />
          <Text style={styles.sectionTitle}>Idade Média</Text>
          <Text style={styles.sectionText}>
            A arte medieval tinha como objetivo ensinar princípios cristãos. 
            Catedrais góticas, vitrais coloridos e manuscritos iluminados 
            transformaram a espiritualidade em imagem e luz.
          </Text>
        </View>

        <View style={styles.sectionCard}>
          <Image source={renascentista} style={styles.sectionImage} />
          <Text style={styles.sectionTitle}>Renascimento</Text>
          <Text style={styles.sectionText}>
            Inspirado na Antiguidade, o Renascimento celebrou o humanismo e o 
            avanço da ciência. Leonardo da Vinci, Michelangelo e Rafael exploraram 
            perspectiva, anatomia e equilíbrio, elevando a arte ao nível científico.
          </Text>
        </View>

        <View style={styles.sectionCard}>
          <Image source={barroco} style={styles.sectionImage} />
          <Text style={styles.sectionTitle}>Barroco</Text>
          <Text style={styles.sectionText}>
            O Barroco trouxe drama, movimento e contrastes intensos. Caravaggio, 
            Bernini e Aleijadinho exploraram emoção, luz e sombra para criar cenas 
            profundas e teatrais.
          </Text>
        </View>

        <View style={styles.sectionCard}>
          <Image source={romantismo} style={styles.sectionImage} />
          <Text style={styles.sectionTitle}>Romantismo</Text>
          <Text style={styles.sectionText}>
            Um movimento que colocou a emoção acima da razão. Pintores como Delacroix 
            e Turner criaram obras marcadas por liberdade, natureza e sentimentos 
            intensos.
          </Text>
        </View>

        <View style={styles.sectionCard}>
          <Image source={modernismo} style={styles.sectionImage} />
          <Text style={styles.sectionTitle}>Modernismo e Vanguardas</Text>
          <Text style={styles.sectionText}>
            No século XX, a arte rompeu padrões. O Impressionismo trouxe a luz, 
            o Cubismo de Picasso desconstruiu formas, e o Surrealismo de Dalí 
            explorou o inconsciente. Cada movimento ampliou o conceito de arte.
          </Text>
        </View>

        <View style={styles.sectionCard}>
          <Image source={contemporanea} style={styles.sectionImage} />
          <Text style={styles.sectionTitle}>Arte Contemporânea</Text>
          <Text style={styles.sectionText}>
            Instalações, performances, arte digital e NFTs mostram que a arte 
            atual ultrapassa telas e esculturas. O artista agora dialoga com 
            tecnologia, identidade, política e novas percepções do mundo.
          </Text>
        </View>

<View style={styles.curiosidadesWrapper}>
  <Text style={styles.curiosidadesTitle}>Curiosidades da História da Arte</Text>

  <View style={styles.curiosidadeItem}>
    <Text style={styles.curiosidadeIcon}>🖼️</Text>
    <Text style={styles.curiosidadeText}>
      A “Mona Lisa” não possui sobrancelhas — acredita-se que foram apagadas durante restaurações antigas.
    </Text>
  </View>

  <View style={styles.curiosidadeItem}>
    <Text style={styles.curiosidadeIcon}>🌻</Text>
    <Text style={styles.curiosidadeText}>
      Van Gogh vendeu apenas um quadro em vida, mas hoje suas obras valem milhões.
    </Text>
  </View>

  <View style={styles.curiosidadeItem}>
    <Text style={styles.curiosidadeIcon}>🎨</Text>
    <Text style={styles.curiosidadeText}>
      Michelangelo levou 4 anos pintando o teto da Capela Sistina — e odiava trabalhar deitado.
    </Text>
  </View>

  <View style={styles.curiosidadeItem}>
    <Text style={styles.curiosidadeIcon}>🧩</Text>
    <Text style={styles.curiosidadeText}>
      O Cubismo nasceu da parceria e rivalidade criativa entre Picasso e Braque.
    </Text>
  </View>

  <View style={styles.curiosidadeItem}>
    <Text style={styles.curiosidadeIcon}>🏛️</Text>
    <Text style={styles.curiosidadeText}>
      Antes dos museus existirem, obras eram exibidas em igrejas, palácios e espaços públicos.
    </Text>
  </View>

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

curiosidadesWrapper: {
  marginTop: 30,
  backgroundColor: "rgb(255, 239, 206)",
  padding: 26,
  borderRadius: 20,
  width: Platform.OS === "web" ? "65%" : "92%",
  maxWidth: 900,
  borderWidth: 3,
  borderColor: "rgb(214, 190, 150)",

  shadowColor: "#000",
  shadowOpacity: 0.12,
  shadowRadius: 8,
  shadowOffset: { width: 0, height: 4 },
  elevation: 6,
},

curiosidadesTitle: {
  fontSize: 30,
  fontFamily: "MedievalSharp_400Regular",
  color: "#B6894A",
  textAlign: "center",
  marginBottom: 20,
},

curiosidadeItem: {
  flexDirection: "row",
  alignItems: "flex-start",
  marginBottom: 20,
},

curiosidadeIcon: {
  fontSize: 26,
  marginRight: 12,
  marginTop: 4,
},

curiosidadeText: {
  flex: 1,
  fontSize: 17,
  lineHeight: 26,
  color: "#6A5630",
  fontFamily: "serif",
  textAlign: "justify",
},

});
