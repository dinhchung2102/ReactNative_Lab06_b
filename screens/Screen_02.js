import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  FlatList,
} from "react-native";
import { dataBike } from "../data/dataBike";
import { useState } from "react";
import React from "react";

export default function Screen_02({ navigation }) {
  const [numCol, setNumCol] = useState(2);
  const [dataList, setDataList] = useState(dataBike);
  //const [checkType, setCheckType] = useState("all");
  const filterData = (type) => {
    if (type === "all") setDataList(dataBike);
    else if (type === "roadbike")
      setDataList(dataBike.filter((bike) => bike.type === "RoadBike"));
    else if (type === "mountain")
      setDataList(dataBike.filter((bike) => bike.type === "Mountain"));
  };
  const renderItem = ({ item }) => {
    return (
      <Pressable
        style={styles.itemView}
        onPress={() => {
          navigation.navigate("Screen_03", {
            id: item.id,
            name: item.name,
            image: item.image,
            price: item.price,
            discount: item.discount,
          });
        }}
      >
        <Image source={item.image} style={styles.itemImage} />
        <Text style={styles.itemText}>{item.name}</Text>
        <Text style={styles.itemText}>${item.price}</Text>
      </Pressable>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>The world’s Best Bike</Text>
      <View style={styles.viewStatus}>
        <Pressable
          style={styles.button}
          onPress={() => {
            filterData("all");
          }}
        >
          <Text style={styles.buttonText}>All</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => {
            filterData("roadbike");
          }}
        >
          <Text style={styles.buttonText}>RoadBike</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => filterData("mountain")}>
          <Text style={styles.buttonText}>Mountain</Text>
        </Pressable>
      </View>
      <View style={styles.listStyle}>
        <FlatList
          data={dataList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={numCol}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemView: {
    justifyContent: "center",
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
    alignItems: "center",
    backgroundColor: "#E941411A",
    width: 167,
    height: 200,
    borderRadius: 15,
  },
  itemImage: {
    width: 146,
    height: 137,
  },
  itemText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
  },
  headerText: {
    fontSize: 25,
    fontWeight: "700",
    color: "red",
    justifyContent: "flex-start",
    marginTop: 40,
    marginLeft: 20,
  },
  viewStatus: {
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 20,
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    width: 99,
    height: 32,
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "grey",
  },
  buttonText: {
    color: "grey",
  },
  listStyle: {
    alignItems: "center",
  },
});
