import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import MenuItem from '../../components/MenuItem'
import MenuHeader from '../../components/MenuHeader'

const Home = ({ navigation }) => (
	<View>
		<View>
			<MenuHeader style={styles.header}/>
		</View>
		<View style={styles.itens}>
			<MenuItem menuIcon='users' textMenu='Ver Pacientes' />
			<MenuItem menuIcon='clipboard' textMenu='Cardápios' /> 
			<MenuItem menuIcon='file-text' textMenu='Consultas' />   
			<MenuItem menuIcon='calendar' textMenu='Agenda' />  
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
	}
})

export default Home;