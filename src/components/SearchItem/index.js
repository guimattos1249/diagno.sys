import React, {Component} from 'react';
import { View, StyleSheet, Text, FlatList, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

var data = []

var qtd =  20;
for(i = 0; i <= qtd; i++){
    data[i] = {id: i, name: 'Patient ' + i}
}    

export const Search = props => 
    <View style={styles.itemEstilo}>
        <Text style={styles.patientText}>{props.name}</Text>
    </View>

export default props => {
    const renderItem = ({item}) => {
        return <Search {...item} />
    }

    return(
        <ScrollView>
            <FlatList 
                data={data} 
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()} 
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    itemEstilo: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        width: 380,
        height: 110,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#ededed',
        backgroundColor: '#FFF',
        borderBottomWidth: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
    },
    patientText: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        fontSize: 18,
        fontFamily: 'Verdana',
        color: '#599924',
        marginLeft: 10,
    }
})

Search.navigationOptions = {
    title: 'Patients',
    tabBarIcon: <Icon name="list" size={18} color="#599924" />
}