import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import SearchHeader from '../../components/SearchHeader'
import SearchItem from '../../components/SearchItem'

const Search = () => (
    <View>
        <SearchHeader/>
        <SearchItem/>
    </View>
);

Search.navigationOptions = {
    title: 'Patients',
    tabBarIcon: <Icon name="list" size={18} color="#599924" />
}

export default Search;