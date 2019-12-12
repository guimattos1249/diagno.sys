import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const Profile = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Profile</Text>
  </View>
);

Profile.navigationOptions = {
  title: 'Profile',
  tabBarIcon: <Icon name="user" size={18} color="#599924" />
}


export default Profile;