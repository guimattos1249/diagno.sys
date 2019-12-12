import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const Calendar = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Calendar</Text>
  </View>
);

Calendar.navigationOptions = {
  title: 'Calendar',
  tabBarIcon: <Icon name="calendar" size={18} color="#599924" />
}


export default Calendar;