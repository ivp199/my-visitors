import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const AllUsersScreen = props => {
  return (
    <View style={styles.container}>
      <Text>All Users screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {}
});

AllUsersScreen.navigationOptions = {
  title: 'All Visitors'
}

export default AllUsersScreen;
