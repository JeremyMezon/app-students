import { StyleSheet } from "react-native";

export const GroupScreenStyle = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingTop: 50,
	},
	groupScreenContainer: {
		width: "100%",
		flexDirection: "column",
		padding: 15,
	},
	viewContainer: {
		width: "100%",
	},
	titleContainer: {
		paddingTop: 20,
		justifyContent: "center",
		paddingBottom: 20,
		// borderBottomColor: "#E8E8E8",
		// borderBottomWidth: 1,
	},
	title: {
		textAlign: "center",
		fontSize: 36,
		fontWeight: "600",
		fontFamily: "Lato_700Bold",
	},
});
