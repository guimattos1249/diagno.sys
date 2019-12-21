import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import MenuItem from '../../components/MenuItem'
import MenuHeader from '../../components/MenuHeader'

const Home = ({ navigation }) => (
	<View>
		<View>
			<MenuHeader style={styles.header} userName='Guilherme Mattos'/>
		</View>
		<View style={styles.itens} >
			<TouchableOpacity onPress={() => navigation.navigate('Search')}>
				<MenuItem menuIcon='users' textMenu='Ver Pacientes' />
			</TouchableOpacity>

			<TouchableOpacity onPress={() => navigation.navigate('Calendar')}>
				<MenuItem menuIcon='clipboard' textMenu='Cardápios' /> 
			</TouchableOpacity>

			<TouchableOpacity onPress={() => navigation.navigate('Search')}>
				<MenuItem menuIcon='file-text' textMenu='Consultas' />   
			</TouchableOpacity>

			<TouchableOpacity onPress={() => navigation.navigate('Search')}>
				<MenuItem menuIcon='calendar' textMenu='Agenda' />
			</TouchableOpacity>
		</View>
	</View>
);

Home.navigationOptions = {
  	title: 'Home',
  	tabBarIcon: <Icon name="home" size={18} color="#599924" />
}

const styles = StyleSheet.create({
    header: {
	},
	itens: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
	}
})

export default Home;