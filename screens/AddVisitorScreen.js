import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import VisitorDetails from '../components/VisitorDetails';
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
      <ScrollView>
        <VisitorDetails
          onVisitorImagePress={() => {}}
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          mobileNumber={mobileNumber}
          setMobileNumber={handleMobileNumberChange}
          email={email}
          setEmail={setEmail}
          gender={gender}
          setGender={setGender}
          purpose={purpose}
          setPurpose={setPurpose}
          comingFrom={comingFrom}
          setComingFrom={setComingFrom}
        />

        {renderError()}
        <View style={styles.buttonContainer}>
          <ButtonComponent
            style={styles.button}
            title='Add Visitor'
            onPress={() => handleAddVisitor()}
          />
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {},
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
