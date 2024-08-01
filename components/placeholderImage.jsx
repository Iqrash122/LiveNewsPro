import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const ImageViewer = ({ placeholderImageSource, selectedImage }) => {
  const imageSource = selectedImage ? { uri: selectedImage } : placeholderImageSource;

  return (
    <View style={styles.imageContainer}>
      <Image source={imageSource} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
});

export default ImageViewer;
