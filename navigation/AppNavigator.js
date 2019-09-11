import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import AddVisitorScreen from '../screens/AddVisitorScreen';
import AddVisitorSuccessScreen from '../screens/AddVisitorSuccessScreen';
import AllUsersScreen from '../screens/AllUsersScreen';
import VisitorDetailsScreen from '../screens/VisitorDetailsScreen';

import Colors from '../constants/colors';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    AddVisitor: {
      screen: AddVisitorScreen
    },
    AddVisitorSuccess: {
      screen: AddVisitorSuccessScreen,
    },
    AllUsers: {
      screen: AllUsersScreen
    },
    VisitorDetails: {
      screen: VisitorDetailsScreen
    }
  },
  {
    initialRouteName: 'AllUsers',
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.themeBackgroundColor,
        shadowColor: 'transparent',
        elevation: 0,
        borderBottomWidth: 0,
      },
      headerTintColor: Colors.themeTextColor,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
)

export default createAppContainer(AppNavigator);