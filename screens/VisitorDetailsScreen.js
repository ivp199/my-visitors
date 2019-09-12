import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import VisitorDetails from '../components/VisitorDetails';

const VisitorDetailsScreen = props => {
  const visitor =  props.navigation.getParam('visitor', {});
  const visitorIcon = visitor.gender === 'Male' ? require('../assets/male.png') : require('../assets/female.png');
  const {
    firstName,
    lastName,
    mobileNumber,
    email,
    gender,
    purpose,
    comingFrom,
    inTime,
    outTime,
  } = visitor;

  return (
    <ScrollView style={styles.container}>
      <VisitorDetails
        editable={false}
        firstName={firstName}
        lastName={lastName}
        mobileNumber={mobileNumber}
        email={email}
        gender={gender}
        purpose={purpose}
        comingFrom={comingFrom}
        inTime={inTime}
        outTime={outTime}
        visitorImageSource={visitorIcon}
        onVisitorImagePress={() => {}}
      />
      <View style={styles.buttonContainer}>
        <ButtonComponent
          style={styles.button}
          title='Okay'
          onPress={() => props.navigation.navigate('AllUsers')}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
  buttonContainer: {
    marginVertical: 10,
    paddingHorizontal: 10
  }
});

VisitorDetailsScreen.navigationOptions = ({navigation}) => ({
  title: navigation.getParam('name', '-'),
})

export default VisitorDetailsScreen;
