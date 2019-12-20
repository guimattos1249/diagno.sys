import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default props =>
        <View style={styles.menuItem}>
            <Icon name={props.menuIcon} size={30} style={styles.menuIcon} />
            <Text style={styles.menuText}>{props.textMenu}</Text>
        </View>

const styles = StyleSheet.create({
    menuItem: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        width: 170,
        height: 110,
        marginTop: 10,
        marginLeft: 20,
        marginRight: 10,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#ededed',
        backgroundColor: '#FFF',
        borderBottomWidth: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
    },
    menuIcon: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginLeft: 10,
        color: '#599924',
    },
    menuText: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        fontSize: 18,
        fontFamily: 'Verdana',
        color: '#599924',
        marginLeft: 10,
    }
})