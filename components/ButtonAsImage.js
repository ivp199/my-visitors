import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import Colors from '../constants/colors';

const ButtonAsImage = props => {
  const { style, imageStyle, imageSource, ...rest } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      {...rest}
      style={{...styles.container, ...style}}
    >
      <Image
        source={imageSource}
        style={{...styles.image, ...imageStyle}}
      />
    </TouchableOpacity>
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

export default ButtonAsImage;
