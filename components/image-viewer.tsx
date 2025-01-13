import { Image, ImageSource } from "expo-image";
import React from "react";
import { StyleSheet } from "react-native";

type Props = {
  imageSource: ImageSource;
};

const ImageViewer = ({ imageSource }: Props) => {
  return <Image source={imageSource} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

export default ImageViewer;
