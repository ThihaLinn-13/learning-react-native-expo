import { Image } from "expo-image";
import { Pressable, StyleSheet, Text } from "react-native";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

type CategoryOrops = {
  id: number;
  image: string;
  name: string;
  selectedCategoryId: number;
  setSelectedCategoryId: (id: number) => void;
};

export default function Category({
  image,
  name,
  id,
  selectedCategoryId,
  setSelectedCategoryId,
}: CategoryOrops) {
  const handleSelect = (id: number) => {
    setSelectedCategoryId(id);
  };

  return (
    <Pressable
      key={id}
      style={[styles.container]}
      onPress={() => {
        handleSelect(id);
      }}
    >
      <Image
        placeholder={blurhash}
        contentFit="cover"
        source={image}
        style={[styles.image, , selectedCategoryId === id && styles.selected]}
        transition={1000}
      ></Image>
      <Text style={styles.title}>{name}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 7,
    marginRight: 25,
  },
  image: {
    width: 56,
    height: 56,
  },
  title: {
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Fredoka-Regular",
  },
  selected: {
    borderWidth: 1,
    borderColor: "yellow",
    borderRadius: 100,
  },
});
