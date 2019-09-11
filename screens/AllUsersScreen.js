import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Banner from '../components/Banner';
import RoundedBorderImage from '../components/RoundedBorderImage';
import VisitorCardView from '../components/VisitorCardView';

const AllUsersScreen = props => {
  const onUserPress = id => {
    props.navigation.push('VisitorDetails');
  }

  return (
    <View style={styles.container}>
      <Banner style={styles.banner}>
        <RoundedBorderImage imageSource={require('../assets/all-users.png')} />
      </Banner>
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={props.screenProps.visitors}
        renderItem={itemData => (
          <VisitorCardView
            visitor={itemData.item}
            onPress={onUserPress}
            onExitPress={() => {}}
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
