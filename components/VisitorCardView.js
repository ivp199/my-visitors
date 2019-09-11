import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import RoundedBorderImage from '../components/RoundedBorderImage';
import ButtonAsImage from '../components/ButtonAsImage';
import Colors from '../constants/colors';

const VisitorCardView = props => {
  const { visitor: { id, firstName, lastName, mobileNumber, gender, inTime, outTime }, onPress, onExitPress } = props;
  const icon = gender === 'Male' ? require('../assets/male.png') : require('../assets/female.png');

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => onPress(id)}>
      <View style={styles.container}>
        <RoundedBorderImage
          imageSource={icon}
          imageStyle={styles.visitorImage}
          imageContainerStyle={styles.visitorImageContainerStyle}
        />
        <View style={styles.visitorDetails}>
          <Text style={styles.name}>
            {firstName} {lastName}
          </Text>
          <Text style={styles.info}>{mobileNumber}</Text>
          <Text style={styles.info}>In: {inTime}</Text>
          {outTime && <Text style={styles.info}>Out: {outTime}</Text>}
        </View>

        {outTime && <ButtonAsImage
                      imageSource={require("../assets/exit.png")}
                      style={styles.exitIconContainerStyle}
                      imageStyle={styles.exitIcon}
                      onPress={() => onExitPress(id)}
                    />
        }
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: '#ccc',
    borderWidth: 1,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  visitorImageContainerStyle: {
    padding: 0,
    marginRight: 10,
  },
  visitorImage: {
    width: 50,
    height: 50,
  },
  visitorDetails: {

  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 3,
    color: Colors.secondaryTextColor,
  },
  info: {
    color: Colors.secondaryTextColor,
    opacity: 0.7
  },
  exitIconContainerStyle: {
    marginLeft: 'auto',
    padding: 0,
  },
  exitIcon: {
    width: 25,
    height: 25
  }
});

export default VisitorCardView;
