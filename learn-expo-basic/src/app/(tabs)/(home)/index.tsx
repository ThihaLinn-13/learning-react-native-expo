import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Image } from "expo-image";
import Ionicons from "@react-native-vector-icons/ionicons";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.screenContainer, { paddingTop: insets.top }]}>
      <View style={styles.headerContainer}>
        <Image
          style={styles.logon}
          source={require("@/assets/images/n.png")}
          contentFit="cover"
          transition={1000}
        />
        <View>
          <Ionicons name="cart-outline" size={30} color="black" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  logon: {
    width: 35,
    height: 35,
  },
});
