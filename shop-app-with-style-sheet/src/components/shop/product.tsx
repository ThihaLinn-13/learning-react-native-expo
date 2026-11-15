import Ionicons from "@react-native-vector-icons/ionicons";
import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { ProductType } from "../../../types/product";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function Product({
  image,
  users,
  id,
  brand,
  star,
  quantity,
  title,
  price,
  discount,
  // itemWidth,
}: ProductType) {
  return (
    <Pressable style={[styles.container]}>
      <Image
        source={image}
        contentFit="cover"
        transition={1000}
        placeholder={blurhash}
        style={styles.image}
      ></Image>
      <Ionicons
        style={styles.favourite}
        name={users.find((user) => user.id === id) ? "heart" : "heart-outline"}
        color={"red"}
      ></Ionicons>
      <View style={styles.content}>
        <View style={styles.contentTitle}>
          <Text style={styles.brand}>{brand}</Text>
          <Ionicons name={"star-outline"} color={"orange"} size={14} />
          <Text style={styles.star}>{star}</Text>
          <Text style={styles.quantity}>({quantity})</Text>
        </View>
        <Text numberOfLines={1}>{title}</Text>
        <View style={styles.amountSection}>
          <Text style={styles.amount}>${price}</Text>
          <Text style={styles.discount}>{discount ? `$${discount}` : ""}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {},
  image: {
    width: "100%",
    aspectRatio: 4 / 5,
    borderRadius: 10,
  },
  favourite: {
    fontSize: 18,
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#00000015",
    padding: 7,
    borderRadius: 100,
  },
  content: {
    gap: 2,
    paddingVertical: 5,
  },
  contentTitle: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  amountSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  brand: {
    fontWeight: "700",
    color: "grey",
    fontFamily: "Fredoka-Regular",
  },
  star: {
    fontWeight: "300",
    fontSize: 12,
  },
  quantity: {
    fontSize: 12,
    color: "grey",
  },
  amount: {
    color: "green",
  },
  discount: {
    textDecorationLine: "line-through",
    color: "grey",
  },
});
