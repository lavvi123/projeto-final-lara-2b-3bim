import { StyleSheet, Text, View, Image, ScrollView, Platform } from "react-native";
import banner from "../../assets/banner.jpg";
import logo from "../../assets/logoHobbit.jpg";



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

        <View style={styles.content}>
          <Text style={styles.title}>Arquivos de Gondor</Text>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#495E3A",
    alignItems: "center",
  },

  bannerContainer: {
    width: "100%",
    height: 250,
    overflow: "hidden",
  },

  bannerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

 divider: {
    width: "100%",
    height: 4,
    backgroundColor: "#C2B280",
  },

  logo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: -70,
    borderWidth: 4,
    borderColor: "#C2B280",
    zIndex: 5,
  },

  content: {
    marginTop: 20,
    alignItems: "center",
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 40,
    fontFamily: "MedievalSharp_400Regular",
    color: "#D0C060",
    textAlign: "center",
  },
});
