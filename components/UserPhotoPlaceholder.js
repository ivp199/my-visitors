import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import Colors from '../constants/colors';

const UserPhotoPlaceholder = ({onPress, style, imageStyle, visitorImage}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.button, style]}
    >
      <Image
        style={[styles.image, imageStyle]}
        source={visitorImage || require('../assets/capture-camera.png')}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
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

export default UserPhotoPlaceholder;
