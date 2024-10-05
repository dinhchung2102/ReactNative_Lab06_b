import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";

export default function Screen_01({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        A premium online store for sporter and their stylish choice
      </Text>
      <View style={styles.imageBG}>
        <Image
          source={require("../assets/bifour.png")}
          style={styles.imageStyle}
        />
      </View>
      <Text style={styles.titleText}>POWER BIKE SHOP</Text>
      <View>
        <Pressable
          style={styles.button}
          onPress={() => {
            navigation.navigate("Screen_02");
          }}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  headerText: {
    //fontFamily: 'Ubuntu',
    fontSize: 30,
    textAlign: "center",
    //marginTop: '20%'
  },
  imageStyle: {
    width: 292,
    height: 270,
    marginTop: "10%",
  },
  titleText: {
    fontSize: 40,
    //fontFamily:'Ubuntu',
    fontWeight: "bold",
    marginTop: "5%",
    marginBottom: "20%",
  },
  imageBG: {
    width: 359,
    height: 388,
    backgroundColor: "#E941411A",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
    borderRadius: 50,
  },
  button: {
    width: 340,
    backgroundColor: "red",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 24,
  },
});
