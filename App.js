import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import defaultVisitors from './constants/visitors';
const persistenceKey = "persistenceKey";

// const persistNavigationState = async (navState) => {
//   try {
//     await AsyncStorage.setItem(persistenceKey, JSON.stringify(navState))
//   } catch(err) {
//     // handle the error according to your needs
//   }
// }
// const loadNavigationState = async () => {
//   const jsonString = await AsyncStorage.getItem(persistenceKey)
//   return JSON.parse(jsonString)
// }


export default function App() {
  const [visitors, setVisitors] = useState(defaultVisitors);

  const addVisitor = (data, cb) => {
    setVisitors([...visitors, data]);
    cb();
  }

  const addOutTime = (id, outTime) => {
    const newVisitors = visitors.map(visitor => {
      if (visitor.id === id) {
        visitor.outTime = outTime;
      }
      return visitor;
    })

    setVisitors(newVisitors);
    console.log(id, outTime);
  }

  return (
    <AppNavigator
      // persistNavigationState={persistNavigationState}
      // loadNavigationState={loadNavigationState}
      // renderLoadingExperimental={() => <ActivityIndicator />}
      screenProps={{
        visitors,
        addVisitor,
        addOutTime
      }}
    />
  );
}