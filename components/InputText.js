import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { StyleSheet, View, TextInput, Animated } from "react-native";
import Colors from '../constants/colors';

const InputText = props => {
  const { value, label, ...rest } = props;

  const [isFocused, setIsFocused] = useState(false);
  const [animate, setAnimate] = useState(
    new Animated.Value(value === "" ? 0 : 1)
  );

  // Work around to achieve componentDidUpdate
  const mounted = useRef();
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      Animated.timing(animate, {
        toValue: isFocused || props.value !== "" ? 1 : 0,
        duration: 200
      })
      .start();
    }
  });

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const labelStyle = {
    top: animate.interpolate({
      inputRange: [0, 1],
      outputRange: [28, 5]
    }),
    fontSize: animate.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12]
    }),
    color: animate.interpolate({
      inputRange: [0, 1],
      outputRange: ["#666", "#666"]
    })
  };

  return (
    <View style={styles.container}>
      <Animated.Text style={{...styles.label, ...labelStyle}}>{label}</Animated.Text>
      <TextInput
        {...rest}
        style={{...styles.textInput, ...props.style}}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  label: {
    position: "absolute",
    left: 5,
  },
  textInput: {
    height: 55,
    fontSize: 20,
    color: Colors.secondaryTextColor,
    paddingTop: 20,
    paddingLeft: 5,
    borderBottomWidth: 1,
    borderBottomColor: Colors.secondaryTextColor,
  }
});

export default InputText;
