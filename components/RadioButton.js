import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const RadioButton = props => {
  return (
    <TouchableOpacity activeOpacity={0.9} {...props}>
      <View style={{...styles.container, ...props.style}} style={styles.container}>
        <View style={styles.icon}>
          {
            props.selected ?
              <View style={styles.selected}/>
              : null
          }
        </View>
        <View style={styles.text}><Text>{props.text}</Text></View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selected: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#000',
  },
  text: {
    paddingLeft: 10,
  }
});

export default RadioButton;
