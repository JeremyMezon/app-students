import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { UtilitiesStyles } from "./assets/styles/utilities.styles";
import { GroupScreen } from "./src/screens/groups.screen";
import { MembersScreen } from "./src/screens/Members.screen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {
	useFonts,
	Lato_400Regular,
	Lato_700Bold,
	Lato_300Light,
	Lato_900Black,
} from "@expo-google-fonts/lato";

const Stack = createStackNavigator();

export default function App() {
	let [fontsLoaded] = useFonts({
		Lato_300Light,
		Lato_400Regular,
		Lato_700Bold,
		Lato_900Black,
	});

	if (!fontsLoaded) {
		return (
			<View style={UtilitiesStyles.containerCenter}>
				<Text>Loading...</Text>
			</View>
		);
	}

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Groups" component={GroupScreen} />
				<Stack.Screen name="Members" component={MembersScreen} />
			</Stack.Navigator>
		</NavigationContainer>
		// <View style={styles.container}>
		// 	<GroupScreen></GroupScreen>
		// 	<StatusBar style="auto" />
		// </View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		paddingTop: 50,
	},
});
