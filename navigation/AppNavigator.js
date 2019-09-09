import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import AddVisitorScreen from '../screens/AddVisitorScreen';
import AllUsersScreen from '../screens/AllUsersScreen';
import Colors from '../constants/colors';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    AddVisitor: {
      screen: AddVisitorScreen
    },
    AllUsers: {
      screen: AllUsersScreen
    }
  },
  {
    initialRouteName: 'AddVisitor',
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