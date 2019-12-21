import Home from '../screens/Home';
import Calendar from '../screens/Calendar';
import Search from '../screens/Search';
import Profile from '../screens/Profile'

import { createAppContainer} from 'react-navigation';
import{ createMaterialBottomTabNavigator, createStackNavigator } from 'react-navigation-material-bottom-tabs'

const Routes = createAppContainer(
  	createMaterialBottomTabNavigator({
    	Home: Home,
    	Search: Search,
    	Calendar: Calendar,
    	Profile: Profile,
  	},
  	{
    	initialRouteName: 'Home',
    	activeColor: '#599924',
    	inactiveColor: '#000',
    	barStyle: { backgroundColor: '#FFF' },
  	})
);

export default Routes;