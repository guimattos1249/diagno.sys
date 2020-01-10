import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const Search = () => (
    <View style={style.container}>
        <TextInput 
            placeholder = "Search"
            //onChangeText={(Text)=>{this.setState({text})}}
            style={style.containerTextInput}
        /> 
    </View>
);



const style = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: '#599924',
        height: 50,
        justifyContent: 'space-around',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerTextInput: {
        height: 40,
        width: 400,
        paddingLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 15,
    }
})



Search.navigationOptions = {
    title: 'Patients',
    tabBarIcon: <Icon name="list" size={18} color="#599924" />
}

export default Search;