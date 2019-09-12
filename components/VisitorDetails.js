import React from 'react';
import { StyleSheet, View } from 'react-native';
import UserPhotoPlaceholder from './UserPhotoPlaceholder';
import InputText from './InputText';
import Banner from './Banner';
import RadioButton from './RadioButton';
import Colors from '../constants/colors';

const VisitorDetails = props => {
  const {
    firstName,
    setFirstName = () => {},
    lastName,
    setLastName = () => {},
    mobileNumber,
    setMobileNumber = () => {},
    email,
    setEmail = () => {},
    gender,
    setGender = () => {},
    purpose,
    setPurpose = () => {},
    comingFrom,
    setComingFrom = () => {},
    inTime,
    outTime,
    onVisitorImagePress = () => {},
    visitorImageSource,
    editable = true
  } = props;

  return (
    <View>
      <Banner>
        <UserPhotoPlaceholder
          onPress={onVisitorImagePress}
          visitorImage={visitorImageSource}
        />
      </Banner>

      <View style={styles.inputContainer}>
        <InputText
          label="First Name"
          value={firstName}
          onChangeText={text => setFirstName(text)}
          editable={editable}
        />
      </View>

      <View style={styles.inputContainer}>
        <InputText
          label="Last Name"
          value={lastName}
          onChangeText={text => setLastName(text)}
          editable={editable}
        />
      </View>

      <View style={styles.inputContainer}>
        <InputText
          label="Mobile Number"
          value={mobileNumber}
          onChangeText={text => setMobileNumber(text)}
          keyboardType='numeric'
          editable={editable}
        />
      </View>

      <View style={styles.inputContainer}>
        <InputText
          label="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          keyboardType='email-address'
          editable={editable}
        />
      </View>

      <View style={[styles.inputContainer, styles.radioButtonGroup]}>
        <RadioButton
          text='Male'
          selected={gender === 'Male' ? true : false}
          onPress={() => setGender('Male')}
          editable={editable}
        />
        <RadioButton
          style={styles.secondRadioButton}
          text='Female'
          selected={gender === 'Female' ? true : false}
          onPress={() => setGender('Female')}
          editable={editable}
        />
      </View>

      <View style={styles.inputContainer}>
        <InputText
          style={styles.mutlilineInputBox}
          label="Purpose of visit"
          value={purpose}
          onChangeText={text => setPurpose(text)}
          // multiline={true}
          editable={editable}
        />
      </View>

      <View style={styles.inputContainer}>
        <InputText
          label="Coming From"
          value={comingFrom}
          onChangeText={text => setComingFrom(text)}
          editable={editable}
        />
      </View>

      {inTime && <View style={styles.inputContainer}>
                  <InputText
                    label="In Time"
                    value={inTime}
                    editable={false}
                  />
                </View>
      }

      {outTime && <View style={styles.inputContainer}>
                    <InputText
                      label="Out Time"
                      value={outTime}
                      editable={false}
                    />
                  </View>
      }
    </View>
  );
};

const styles = StyleSheet.create({
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
    // marginBottom: -5
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

export default VisitorDetails;
