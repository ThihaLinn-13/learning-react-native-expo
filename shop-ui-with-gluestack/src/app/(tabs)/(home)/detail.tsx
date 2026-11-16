import ViewPager from "@/components/shop/ViewPager";
import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import {
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
} from "@/components/ui/checkbox";
import { HStack } from "@/components/ui/hstack";
import { CheckIcon, FavouriteIcon, Icon } from "@/components/ui/icon";
import { Pressable } from "@/components/ui/pressable";
import { Text } from "@/components/ui/text";
import { Toast, ToastTitle, useToast } from "@/components/ui/toast";
import { VStack } from "@/components/ui/vstack";
import { products } from "@/data";
import { useLocalSearchParams } from "expo-router";
import { Star } from "lucide-react-native";
import { useState } from "react";
import { ScrollView } from "react-native";

export default function detail() {
  const { id } = useLocalSearchParams();
  const [seeMore, setSeeMore] = useState(false);
  const [color, setColor] = useState<number[]>([]);
  const [size, setSize] = useState<number[]>([]);
  const product = products.find((p) => p.id === Number(id));
  const toast = useToast();
  const [toastId, setToastId] = useState(0);

  const handleToast = () => {
    if (!toast.isActive(toastId.toString())) {
      showNewToast();
    }
  };

  const showNewToast = () => {
    const newId = Math.random();
    setToastId(newId);
    toast.show({
      id: newId.toString(),
      placement: "top",
      duration: 3000,
      render: ({ id }) => {
        const uniqueToastId = "toast-" + id;
        return (
          <Toast nativeID={uniqueToastId} action="muted" variant="solid">
            <ToastTitle>Hello!</ToastTitle>
            <ToastDescription>
              This is a customized toast message.
            </ToastDescription>
          </Toast>
        );
      },
    });
  };

  return (
    <VStack className="flex-1 bg-white" space="sm">
      <ViewPager />
      <ScrollView>
        <VStack space="sm" className="px-4">
          <HStack className="items-center justify-between">
            <HStack className="items-center" space="sm">
              <Text className="font-bold text-gray-500">{product?.brand}</Text>
              <Icon as={Star} color="orange" size="sm" />
              <Text className="text-gray-500">{product?.star}</Text>
              <Text className="text-gray-400">({product?.quantity})</Text>
            </HStack>
            <Icon
              as={FavouriteIcon}
              className={`${product?.users.find((item) => item.id === product.id) ? "fill-red-500" : ""} text-red-500`}
            />
          </HStack>
          <Text numberOfLines={1}>{product?.title}</Text>
          <HStack space="md">
            <Text className="text-green-500">${product?.price}</Text>
            <Text className="line-through">
              {product?.discount ? `$${product?.discount}` : ""}
            </Text>
          </HStack>
          <Box>
            <Text numberOfLines={seeMore ? undefined : 3}>
              {product?.description}
            </Text>
            <Pressable onPress={() => setSeeMore(!seeMore)}>
              <Text italic>{`${seeMore ? "See less" : "See more"}`}</Text>
            </Pressable>
          </Box>
          <VStack space="md">
            <Box>
              <Text size="sm" className="mb-3">
                Choose Color
              </Text>
              <HStack space="md">
                {product?.colors.map((item) => (
                  <Checkbox
                    key={item.id}
                    isDisabled={!item.stock}
                    value={item.id.toString()}
                    isChecked={color.includes(item.id)}
                    onChange={(checked) => {
                      setColor((prev) =>
                        checked
                          ? [...prev, item.id]
                          : prev.filter((id) => id !== item.id),
                      );
                    }}
                  >
                    <CheckboxIndicator>
                      <CheckboxIcon as={CheckIcon} />
                    </CheckboxIndicator>
                    <CheckboxLabel>{item.name}</CheckboxLabel>
                  </Checkbox>
                ))}
              </HStack>
            </Box>
            <Box>
              <Text size="sm" className="mb-3">
                Choose Size
              </Text>
              <HStack space="md">
                {product?.sizes.map((item) => (
                  <Checkbox
                    key={item.id}
                    isDisabled={!item.stock}
                    value={item.id.toString()}
                    isChecked={size.includes(item.id)}
                    onChange={(checked) => {
                      setSize((prev) =>
                        checked
                          ? [...prev, item.id]
                          : prev.filter((id) => id !== item.id),
                      );
                    }}
                  >
                    <CheckboxIndicator>
                      <CheckboxIcon as={CheckIcon} />
                    </CheckboxIndicator>
                    <CheckboxLabel>{item.name}</CheckboxLabel>
                  </Checkbox>
                ))}
              </HStack>
            </Box>
          </VStack>
          <Button
            variant="default"
            size="default"
            className="mt-3 w-2/5 bg-sky-500"
            onPress={() => {
              if(color && size){
                
              }
            }}
          >
            <ButtonText className="text-white">Set quantity</ButtonText>
          </Button>
        </VStack>
      </ScrollView>
    </VStack>
  );
}
