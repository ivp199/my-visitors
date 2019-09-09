import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Colors from '../constants/colors';

const ButtonComponent = props => {
  const { title, style, buttonStyle, buttonTextStyle, onPress } = props;
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.button, buttonStyle]}
        onPress={onPress}
      >
        <Text style={[styles.buttonText, buttonTextStyle]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: Colors.themeBackgroundColor,
    padding: 15,
  },
  buttonText: {
    color: Colors.themeTextColor,
    fontWeight: 'bold',
    fontSize: 16,
  }
});

export default ButtonComponent;
