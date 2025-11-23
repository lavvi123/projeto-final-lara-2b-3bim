import { StyleSheet, Text, View, ImageBackground, Image, ScrollView, Platform } from "react-native";
import fundo from "../../assets/fundotwo.jpg";

export default function Page() {
  return (
    <View style={styles.root}>

      {/* FUNDO BLUR */}
      <ImageBackground
        source={fundo}
        style={styles.bgBlur}
        imageStyle={styles.bgBlurImage}
        blurRadius={20}
      >
        
        <ScrollView contentContainerStyle={styles.scroll}>

          {/* IMAGEM PRINCIPAL (WEB = banner / MOBILE = completa) */}
          <Image source={fundo} style={styles.mainImage} />

          <View style={styles.content}>
            <Text style={styles.title}>Mobile perfeito e Web banner!</Text>
            <Text style={styles.subtitle}>Imagem inteira, sem distorção em ambos.</Text>
          </View>

          <View style={{ height: 900 }} />

        </ScrollView>

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  bgBlur: {
    flex: 1,
  },

  bgBlurImage: {
    resizeMode: "cover",
  },

  scroll: {
    flexGrow: 1,
    alignItems: "center",
  },

  mainImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 16 / 9,
    resizeMode: "contain",
    marginTop: 20,
    borderRadius: 10,
    maxHeight: 350,
  },

  content: {
    marginTop: 30,
    paddingHorizontal: 20,
    alignItems: "center",
  },

  title: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },

  subtitle: {
    fontSize: 16,
    color: "#EEE",
    marginTop: 10,
    textAlign: "center",
  },
});
