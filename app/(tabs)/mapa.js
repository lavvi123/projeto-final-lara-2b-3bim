import { StyleSheet, Text, View, Image, ScrollView, Platform } from "react-native";
import fundo from "../../assets/fundotwo.jpg";
import logo from "../../assets/logoHobbit.jpg";

export default function Page() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
    
       <View style={styles.fundoContainer}>
          <Image 
            source={fundo} 
            style={[
              styles.fundoImage,
              Platform.OS === "web" && styles.fundoWeb,
            ]} 
          />
        </View>

        <View style={styles.divider} />
            
        <Image source={logo} style={styles.logo} />

        <View style={styles.content}>
          <Text style={styles.title}>Mapa da Terra-média</Text>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C2B280",
    alignItems: "center",
  },

  fundoContainer: {
    width: "100%",
    height: 250,
    overflow: "hidden",
  },

  fundoImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  divider: {
    width: "100%",
    height: 4,
    backgroundColor: "#495E3A",
  },

  logo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: -70,
    borderWidth: 4,
    borderColor: "#495E3A",
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
    textAlign: "center",
  },
});
