import { StyleSheet, Text, View, Image, Pressable } from "react-native";

export default function Screen_03({ route }) {
  const { id, name, image, price, discount } = route.params;
  const total = price * (1 - discount);
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image source={image} style={styles.imageStyle} />
      </View>
      <Text style={{ fontSize: 50, fontWeight: "bold" }}>{name}</Text>
      <View style={styles.viewPrice}>
        <Text style={{ fontSize: 30, fontWeight: "bold", marginRight: 10 }}>
          {discount * 100}% OFF |
        </Text>
        <Text style={{ fontSize: 30, fontWeight: "bold", marginRight: 40 }}>
          {total}$
        </Text>
        <Text
          style={{
            textDecorationLine: "line-through",
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          {price}$
        </Text>
      </View>
      <Text
        style={{
          fontSize: 25,
          marginTop: 20,
          marginBottom: 20,
          fontWeight: "bold",
        }}
      >
        Description
      </Text>
      <Text style={{ fontSize: 22 }}>
        It is a very important form of writing as we write almost everything in
        paragraphs, be it an answer, essay, story, emails, etc.
      </Text>
      <View style={styles.footer}>
        <Image source={require("../assets/heart.png")} />
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //alignItems: 'center',
  },
  imageView: {
    marginTop: "20%",
    marginLeft: "6%",
    backgroundColor: "#E941411A",
    width: 359,
    height: 388,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  imageStyle: {},
  viewPrice: {
    flexDirection: "row",
  },
  footer: {
    marginTop: 50,
    flexDirection: "row",
  },
  button: {
    backgroundColor: "red",
    width: 269,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    height: 54,
    marginLeft: "20%",
  },
  buttonText: {
    fontSize: 22,
    color: "white",
  },
});
