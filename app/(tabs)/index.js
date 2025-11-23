import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
  Platform,
} from "react-native";

import { router } from "expo-router";

import banner from "../../assets/banner.jpg";
import logo from "../../assets/logoHobbit.jpg";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function Page() {
  return (
    <View style={styles.root}>
      <ImageBackground
        source={banner}
        blurRadius={20}
        style={styles.bgBlur}
        imageStyle={styles.bgBlurImage}
      />

      <ScrollView contentContainerStyle={styles.scroll}>
        {/* BANNER */}
        <View style={styles.bannerContainer}>
          <Image source={banner} style={styles.banner} />
        </View>

        {/* MENU PERSONALIZADO */}
        <View style={styles.menuWrapper}>
          <View style={styles.menuContainer}>
            {/* LEFT SIDE */}
            <TouchableOpacity onPress={() => router.push("/pageone")}>
              <FontAwesome name="tag" size={28} color="white" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push("/pagetwo")}>
              <FontAwesome name="free-code-camp" size={28} color="white" />
            </TouchableOpacity>

            {/* SPACE FOR LOGO */}
            <View style={styles.logoHole} />

            {/* RIGHT SIDE */}
            <TouchableOpacity onPress={() => router.push("/mapa")}>
              <Fontisto name="map" size={28} color="white" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push("/aboutme")}>
              <MaterialIcons name="nature-people" size={28} color="white" />
            </TouchableOpacity>
          </View>

          {/* LOGO NO CENTRO DO MENU */}
          <TouchableOpacity
            style={styles.logoContainer}
            onPress={() => router.push("/")}
          >
            <Image source={logo} style={styles.logo} />
          </TouchableOpacity>
        </View>

        {/* CONTAINER VERDE */}
        <View style={styles.greenContainer}>
          <View style={styles.content}>
            <Text style={styles.title}>Arquivos de Gondor</Text>
            <Text style={styles.subtitle}>
              Pré-requisito para a disciplina de DDM
            </Text>

            <Text style={styles.lorem}>
              A terra de Gondor guarda histórias antigas...
            </Text>

            <Text style={styles.lorem}>
              A terra de Gondor guarda histórias antigas...
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },

  bgBlur: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  bgBlurImage: { resizeMode: "cover" },

  scroll: {
    flexGrow: 1,
    alignItems: "center",
  },

  bannerContainer: {
  width: "100%",
  alignItems: "center",
  marginTop: 20,
},


  banner: {
    width: "97%",
    borderRadius: 25,
    aspectRatio: 16 / 9,
    overflow: "hidden",
    ...Platform.select({
      web: {
        objectFit: "cover",
        maxHeight: 350,
      },
    }),
  },

  menuWrapper: {
  width: "100%",
  alignItems: "center",
  marginTop: -40,  // logo encaixa entre banner e menu
  marginBottom: 30, // empurra o container para baixo
  zIndex: 10,
},


  menuContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "85%",
    backgroundColor: "#ffffff22",
    paddingVertical: 18,
    paddingHorizontal: 25,
    borderRadius: 25,
    backdropFilter: "blur(10px)",
  },

  logoHole: {
    width: 150,
  },

  logoContainer: {
    position: "absolute",
    top: -60,
  },

  logo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 5,
    borderColor: "white",
  },

  /* CONTAINER VERDE */
  greenContainer: {
    marginTop: 0,
    width: "97%",
    backgroundColor: "#495E3A",
    alignItems: "center",
    paddingTop: 80,
    paddingBottom: 50,
    borderRadius: 25,
    overflow: "hidden",
  },

  content: {
    width: "90%",
    alignItems: "center",
  },

  title: {
    fontSize: 40,
    color: "#D0C060",
    fontWeight: "bold",
    textAlign: "center",
  },

  subtitle: {
    color: "#EEE",
    fontSize: 20,
    marginTop: 10,
  },

  lorem: {
    color: "#F3F3D0",
    fontSize: 18,
    marginTop: 25,
    lineHeight: 26,
    textAlign: "center",
  },
});
