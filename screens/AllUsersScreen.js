import React from 'react';
import { StyleSheet, View, FlatList, Alert } from 'react-native';
import Banner from '../components/Banner';
import RoundedBorderImage from '../components/RoundedBorderImage';
import VisitorCardView from '../components/VisitorCardView';

const AllUsersScreen = props => {
  const { visitors } = props.screenProps;
  const onUserPress = id => {
    const selectedVisitor = visitors.find(v => v.id === id);

    props.navigation.push('VisitorDetails', {
      name: `${selectedVisitor.firstName} ${selectedVisitor.lastName}`,
      visitor: selectedVisitor
    });
  }

  const markExit = id => {
    const d = new Date;
    const formatedDate = `${d.getDate()}-${d.getMonth()+1}-${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
    props.screenProps.addOutTime(id, formatedDate);
  }

  const onMarkExitPress = id => {
    const selectedVisitor = visitors.find(v => v.id === id);

    Alert.alert(
      'Are you sure?',
      `Do you want to mark ${selectedVisitor.firstName} ${selectedVisitor.lastName} out?`,
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Yes', 
          onPress: () => markExit(id),
        },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <Banner style={styles.banner}>
        <RoundedBorderImage imageSource={require('../assets/all-users.png')} />
      </Banner>
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={visitors}
        renderItem={itemData => (
          <VisitorCardView
            visitor={itemData.item}
            onPress={onUserPress}
            onExitPress={onMarkExitPress}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  banner: {
    paddingBottom: 40,
  }
});

AllUsersScreen.navigationOptions = {
  title: 'All Visitors'
}

export default AllUsersScreen;
