import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import RoundedBorderImage from '../components/RoundedBorderImage';
import ButtonComponent from '../components/ButtonComponent';
import Colors from '../constants/colors';

const AddVisitorSuccessScreen = props => {
  const { navigation } = props;
  const firstName = navigation.getParam('firstName', '');
  const lastName = navigation.getParam('lastName', '');
  return (
    <View style={styles.container}>
      <RoundedBorderImage
        imageSource={require('../assets/checkmark.png')}
      />
      <Text style={styles.text}>{firstName} {lastName} is added successfully</Text>

      <View style={styles.buttons}>
        <ButtonComponent
          style={{...styles.button}}
          buttonTextStyle={styles.buttonText}
          title='Add new visitor'
          onPress={() => navigation.navigate('AddVisitor')}
        />
        <ButtonComponent
          style={{...styles.button}}
          buttonTextStyle={styles.buttonText}
          title='Home Screen'
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.themeBackgroundColor,
    paddingTop: 150,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  image: {

  },
  text: {
    marginTop: 20,
    color: Colors.themeTextColor,
    fontSize: 20,
    fontWeight: 'bold'
  },
  buttons: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    width: '100%',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexDirection:'row',
  },
  button: {
    width: 150,
    backgroundColor: Colors.themeTextColor,
  },
  buttonText: {
    color: Colors.themeBackgroundColor
  }
});

AddVisitorSuccessScreen.navigationOptions = {
  title: 'Successfully Added',
  headerLeft: null
}

export default AddVisitorSuccessScreen;
