import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const Home = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>This is the Home Page</Text>
  </View>
);

Home.navigationOptions = {
  title: 'Home',
  tabBarIcon: <Icon name="home" size={18} color="#599924" />
}

export default Home;