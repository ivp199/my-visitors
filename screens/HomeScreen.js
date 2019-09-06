import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import ButtonAsImage from '../components/ButtonAsImage';
import Colors from '../constants/colors';

const HomeScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>My Visitors</Text>
      
      <View style={styles.buttons}>
        <View style={styles.buttonContainer}>
          <ButtonAsImage
            imageSource={require('../assets/add-user.png')}
            onPress={() => {}}
          />
        </View>
        <View style={styles.buttonContainer}>
          <ButtonAsImage
            imageSource={require('../assets/all-users.png')}
            onPress={() => {}}
          />
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.themeBackgroundColor,
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    paddingBottom: 50,
    color: Colors.themeTextColor,
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'baseline'    
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
