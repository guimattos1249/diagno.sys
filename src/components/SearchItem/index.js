import React, {Component} from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { FlatList } from 'react-native-gesture-handler';

const Search = () => (
    <View style={style.listItem}>
        <FlatList 
            data={[{key: 'Item1'}, {key: 'Item2'}]}
            renderItem={({item}) => <Text>{item.key}</Text>}
        />
    </View>
);



const style = StyleSheet.create({
    listItem: {
        alignItems: 'center'
    },
})



Search.navigationOptions = {
    title: 'Patients',
    tabBarIcon: <Icon name="list" size={18} color="#599924" />
}

export default Search;