import { StackScreenProps } from "@react-navigation/stack";
import { ReactElement, memo } from "react";
import { AppNavigatorParams } from "../navigation/stackNavigation";
import { Image, StyleSheet, Text, View } from "react-native";
import { useAppSelector } from "../hooks/reduxHooks";
import { selectImageById } from "../redux/slices/imageSlice";
import React from "react";

type Props = StackScreenProps<AppNavigatorParams, "Photo">;

const Photo = ({ route }: Props): ReactElement => {
  const imageId = route.params?.imageId;
  const image = useAppSelector((state) => selectImageById(state, imageId));

  return (
    <View style={styles.container}>
      {image.description && (
        <View style={styles.textContainer}>
          <Text style={styles.imageDescription}>
            {image?.description?.split(" ").slice(0, 7).join(" ")}
          </Text>
        </View>
      )}
      <Image
        source={{ uri: image?.urls.regular }}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  textContainer: {
    marginTop: 16,
  },
  image: {
    flex: 1,
    width: "100%",
    marginVertical: 16,
  },
  imageDescription: {
    fontSize: 16,
  },
});

export default memo(Photo);
