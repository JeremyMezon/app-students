import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { GroupScreen } from "./src/screens/groups.screen";
import {
	useFonts,
	Lato_400Regular,
	Lato_700Bold,
	Lato_300Light,
} from "@expo-google-fonts/lato";

export default function App() {
	useFonts({
		Lato_300Light,
		Lato_400Regular,
		Lato_700Bold,
	});

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
	},
});
