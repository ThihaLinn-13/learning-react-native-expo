import { Pressable, StyleSheet, Text, View } from "react-native";

type TitleProps = {
  title: string;
  btnText: string;
};

export default function Title({ title, btnText }: TitleProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Pressable>
        <Text style={styles.btntext}>{btnText}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  title: {
    fontFamily: "Fredoka-Regular",
  },
  btntext: {
    color: "grey",
    fontWeight: "500",
    fontFamily: "Fredoka-Regular",
  },
});
