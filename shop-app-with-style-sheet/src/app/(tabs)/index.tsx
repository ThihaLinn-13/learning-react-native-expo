import Cart from "@/components/shop/cart";
import Category from "@/components/shop/category";
import Product from "@/components/shop/product";
import Title from "@/components/shop/title";
import { categories, products } from "@/data/index";
import "@/global.css";
import { FlashList } from "@shopify/flash-list";
import { Image } from "expo-image";
import { useState } from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function Home() {
  const insets = useSafeAreaInsets();
  const [selectedCategoryId, setSelectedCategoryId] = useState(0);
  const width = Dimensions.get("screen").width;
  const PADDING = 16;
  const GAP = 10;

  const numOfColumn = width < 600 ? 2 : width < 760 ? 3 : 4;

  // const itemWidth =
  //   (width - (PADDING * 2 + GAP * (numOfColumn - 1))) / numOfColumn;
  return (
    <View style={[{ flex: 1, paddingTop: insets.top }, styles.mainContainer]}>
      <View style={styles.container}>
        <Image
          source={require("@/assets/images/M-logo.png")}
          contentFit="cover"
          style={styles.logoImage}
        />
        <Cart></Cart>
      </View>
      <ScrollView>
        <>
          <Image
            placeholder={blurhash}
            contentFit="cover"
            transition={1000}
            source={require("@/data/shop/banner6.png")}
            style={styles.bannerImage}
          ></Image>
          <Title title="Shop By category" btnText="See All"></Title>
          <View style={styles.categorySection}>
            {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {categories.map((category) => {
                  return <Category key={category.id} {...category}></Category>;
                })}
              </ScrollView> */}
            {/* <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={categories}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <Category {...item}></Category>}
              ></FlatList> */}
            <FlashList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={categories}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <Category
                  setSelectedCategoryId={setSelectedCategoryId}
                  selectedCategoryId={selectedCategoryId}
                  {...item}
                ></Category>
              )}
            ></FlashList>
          </View>
          <Title title="Recommended for you" btnText="See All"></Title>
        </>

        <FlashList
          numColumns={numOfColumn}
          showsHorizontalScrollIndicator={false}
          data={products}
          keyExtractor={(item) => item.id.toString()}
          // columnWrapperStyle={{ paddingHorizontal: PADDING, gap: GAP }}
          contentContainerStyle={{ paddingHorizontal: PADDING, gap: GAP }}
          renderItem={({ item, index }) => {
            const col = index % numOfColumn;
            const isFirst = col === 0;
            const isLast = col === numOfColumn - 1;

            return (
              <View
                style={{
                  paddingRight: isFirst ? GAP / 2 : 0,
                  paddingLeft: isLast ? GAP / 2 : 0,
                  paddingHorizontal: !isFirst && !isLast ? GAP / 2 : 0,
                  paddingBottom: GAP,
                }}
              >
                <Product {...item} />
              </View>
            );
          }}
        ></FlashList>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  logoImage: {
    width: 32,
    height: 32,
  },
  bannerImage: {
    width: "100%",
    aspectRatio: 20 / 9,
  },
  categorySection: {
    paddingHorizontal: 16,
    marginBottom: 10,
  },
});
