import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Colors from '../constants/colors';

const RoundedBorderImage = props => {
  const { imageContainerStyle, imageStyle, imageSource } = props;
  return (
    <View style={[styles.container, imageContainerStyle]}>
      <Image
        style={[styles.image, imageStyle]}
        source={imageSource}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: Colors.themeTextColor,
  },
  image: {
    width: 70,
    height: 70,
  }
});

export default RoundedBorderImage;
