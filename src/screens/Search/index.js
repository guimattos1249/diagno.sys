import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const Search = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Search</Text>
  </View>
);

Search.navigationOptions = {
  title: 'Patients',
  tabBarIcon: <Icon name="list" size={18} color="#599924" />
}


export default Search;