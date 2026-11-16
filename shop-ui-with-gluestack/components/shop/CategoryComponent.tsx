import { Category } from "@/types/category";
import { Image } from "expo-image";
import { Box } from "../ui/box";
import { Pressable } from "../ui/pressable";
import { Text } from "../ui/text";
import { VStack } from "../ui/vstack";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function CategoryComponent({ id, image, name }: Category) {
  return (
    <Pressable>
      <VStack className="mr-4 items-center gap-2">
        <Box className="h-16 w-16 rounded-full">
          <Image
            source={image}
            contentFit="cover"
            transition={1000}
            placeholder={blurhash}
            style={{ flex: 1 }}
          />
        </Box>
        <Text className="text-sm">{name}</Text>
      </VStack>
    </Pressable>
  );
}
