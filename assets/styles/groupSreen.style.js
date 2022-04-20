import { StyleSheet } from "react-native";

export const GroupScreenStyle = StyleSheet.create({
	groupScreenContainer: {
		width: "100%",
		flexDirection: "column",
		padding: 15,
		borderColor: "red",
		borderWidth: 1,
	},
	viewContainer: {
		width: "100%",
		borderWidth: 1,
	},
	titleContainer: {
		paddingTop: 30,
		justifyContent: "center",
		paddingBottom: 30,
		borderBottomColor: "#333333",
		borderBottomWidth: 1,
	},
	title: {
		textAlign: "center",
		fontSize: 32,
		fontWeight: "600",
	},
});
