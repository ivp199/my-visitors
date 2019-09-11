import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Colors from '../constants/colors';

const ButtonComponent = props => {
  const { title, style, buttonTextStyle, ...restProps } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      {...restProps}
      style={[styles.button, style]}
    >
      <Text style={[styles.buttonText, buttonTextStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
