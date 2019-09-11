import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';

import Banner from '../components/Banner';
import InputText from '../components/InputText';
import RadioButton from '../components/RadioButton';
import ButtonComponent from '../components/ButtonComponent';
import UserPhotoPlaceholder from '../components/UserPhotoPlaceholder';

import Colors from '../constants/colors';

const AddVisitorScreen = props => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [purpose, setPurpose] = useState('');
  const [comingFrom, setComingFrom] = useState('');
  const [errorText, setErrorText] = useState('');

  const handleMobileNumberChange = text => {
    setMobileNumber(text.replace(/[^0-9]/g, ''));
  }

  const handleAddVisitor = () => {
    if (!firstName || !lastName || !mobileNumber || !email || !gender || !purpose || !comingFrom) {
      setErrorText('Please fill up all the fields above');
      return;
    }
    
    props.screenProps.addVisitor({ firstName, lastName, mobileNumber, email, gender, purpose, comingFrom },
      (err, data) => {
        if (!err) {
          props.navigation.navigate('AddVisitorSuccess', {
            firstName,
            lastName
          });
          setFirstName('');
          setLastName('');
          setMobileNumber('');
          setEmail('');
          setGender('');
          setPurpose('');
          setComingFrom('');
        }
      }
    );  
  }

  const renderError = () => {
    if (!errorText) {
      return null;
    }
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{errorText}</Text>
      </View>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View>
        <Banner>
          <UserPhotoPlaceholder
            onPress={() => props.navigation.push('Home')}
          />
        </Banner>

        <ScrollView bounces={false}>
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
              onChangeText={text => setComingFrom(text)}
            />
          </View>

          {renderError()}
          <View style={styles.buttonContainer}>
            <ButtonComponent
              style={styles.button}
              title='Add Visitor'
              onPress={() => handleAddVisitor()}
            />
          </View>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {},
  banner: {
    backgroundColor: Colors.themeBackgroundColor,
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center'
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
    paddingTop: 10,
  },
  button: {
    marginHorizontal: 10,
  },
  buttonText: {
    color: Colors.themeTextColor,
    fontWeight: 'bold',
    fontSize: 16,
  },
  errorContainer: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  errorText: { 
    color: 'red'
  }
});

AddVisitorScreen.navigationOptions = {
  title: 'Add Visitor',
}

export default AddVisitorScreen;
