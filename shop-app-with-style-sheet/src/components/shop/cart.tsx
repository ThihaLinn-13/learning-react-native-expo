import Ionicons from "@react-native-vector-icons/ionicons";
import { StyleSheet, Text, View } from "react-native";

export default function Cart() {
  return (
    <View>
      <Ionicons name="cart-outline" size={24} color="black" />
      <View style={styles.badgeContainer}>
        <Text style={styles.badge}>13</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  badgeContainer: {
    position: "absolute",
    top: -3,
    right: -5,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: 16,
    height: 16,
  },
  badge: {
    color: "white",
    fontSize: 10,
  },
});
