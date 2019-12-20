import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import logoWhite from '../../assets/logo-white_transparent.png'

export default props =>
    <View style={styles.container}>
        <View style={styles.containerLogo}>
            <Image style={styles.logo}
                source={logoWhite} />
        </View>
        <View>
            <Icon name='user-md' size={65} style={styles.userIcon} />
            <Text style={styles.userName}>{props.userName}</Text>
        </View>
    </View>

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: '#599924',
        height: 250,
        justifyContent: 'space-around',
        
    },
    containerLogo: {
        display: 'flex',
        alignItems: 'center',
    },
    logo: {
        display: 'flex',
        width: 250,
        height: 50,
    },
    userIcon: {
        color: '#FFF',
        display: 'flex',
        alignItems: 'flex-start',
        marginLeft: 10,
    },
    userName: {
        color: '#FFF',
        fontFamily: 'Verdana',
        fontSize: 20,
        marginLeft: 10,
    }

})