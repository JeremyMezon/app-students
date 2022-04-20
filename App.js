import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { UtilitiesStyles } from "./assets/styles/utilities.styles";
import { GroupScreen } from "./src/screens/groups.screen";
import {
	useFonts,
	Lato_400Regular,
	Lato_700Bold,
	Lato_300Light,
	Lato_900Black,
} from "@expo-google-fonts/lato";

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
		<View style={styles.container}>
			<GroupScreen></GroupScreen>
			<StatusBar style="auto" />
		</View>
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
