import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInout } from 'react-native';

import InputText from '../components/InputText';
import RadioButton from '../components/RadioButton';
import ButtonComponent from '../components/ButtonComponent';
import Colors from '../constants/colors';

const AddVisitorScreen = props => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [purpose, setPurpose] = useState('');
  const [comingFrom, setComingFrom] = useState('');

  const handleMobileNumberChange = text => {
    setMobileNumber(text.replace(/[^0-9]/g, ''))
  }

  return (
    <View style={styles.screen}>
      <View style={styles.banner}>
        
      </View>
      <View style={styles.inputContainer}>
        <InputText
          label="First Name"
          value={firstName}
          onChangeText={text => setFirstName(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <InputText
          label="Last Name"
          value={lastName}
          onChangeText={text => setLastName(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <InputText
          label="Mobile Number"
          value={mobileNumber}
          onChangeText={text => handleMobileNumberChange(text)}
          keyboardType='numeric'
        />
      </View>

      <View style={styles.inputContainer}>
        <InputText
          label="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          keyboardType='email-address'
        />
      </View>

      <View style={[styles.inputContainer, styles.radioButtonGroup]}>
        <RadioButton
          text='Male'
          selected={gender === 'Male' ? true : false}
          onPress={() => setGender('Male')}
        />
        <RadioButton
          style={styles.secondRadioButton}
          text='Female'
          selected={gender === 'Female' ? true : false}
          onPress={() => setGender('Female')}
        />
      </View>

      <View style={styles.inputContainer}>
        <InputText
          style={styles.mutlilineInputBox}
          label="Purpose of visit"
          value={purpose}
          onChangeText={text => setPurpose(text)}
          // multiline={true}
        />
      </View>

      <View style={styles.inputContainer}>
        <InputText
          label="Coming From"
          value={comingFrom}
          onChangeText={text => comingFrom(text)}
        />
      </View>

      <ButtonComponent
        style={styles.buttonContainer}
        title='Add Visitor'
        onPress={() => {}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {},
  banner: {
    height: 100,
    backgroundColor: Colors.themeBackgroundColor
  },
  inputContainer: {
    marginHorizontal: 20,
    marginVertical: 5
  },
  radioButtonGroup: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: -5
  },
  secondRadioButton: {
    marginLeft: 40
  },
  mutlilineInputBox: {
    textAlignVertical: 'top',
  },
  buttonContainer: {
    paddingTop: 20,
  },
  button: {
    backgroundColor: Colors.themeBackgroundColor,
    padding: 15,
  },
  buttonText: {
    color: Colors.themeTextColor,
    fontWeight: 'bold',
    fontSize: 16,
  }
});

AddVisitorScreen.navigationOptions = {
  title: 'Add Visitor',
}

export default AddVisitorScreen;
