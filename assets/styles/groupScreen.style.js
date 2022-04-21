import { StyleSheet } from "react-native";

export const GroupScreenStyle = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingTop: 0,
		paddingBottom: 0,
	},
	groupScreenContainer: {
		width: "100%",
		flexDirection: "column",
	},
	viewContainer: {
		width: "100%",
		padding: 15,
	},
	titleContainer: {
		paddingTop: 20,
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
		paddingBottom: 20,
		// borderBottomColor: "#E8E8E8",
		// borderBottomWidth: 1,
	},
	imageContainer: {
		width: 125,
		height: 125,
		marginBottom: 15,
		borderRadius: 100,
		overflow: "hidden",
		justifyContent: "center",
		alignItems: "center",
	},
	image: {
		width: "100%",
		height: "100%",
	},
	title: {
		textAlign: "center",
		fontSize: 36,
		fontWeight: "600",
		fontFamily: "Lato_700Bold",
	},
	footer: {
		padding: 20,
		backgroundColor: "#333333",
	},
	copyright: {
		color: "#F3F3F3",
		fontSize: 10,
		textAlign: "center",
	},
});
