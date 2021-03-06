import { StyleSheet } from "react-native";

export const GroupCardStyle = StyleSheet.create({
	groupCard: {
		flexDirection: "row",
		borderRadius: 10,
		backgroundColor: "#F4F4F6",
		width: "90%",
		marginLeft: 0,
		marginRight: 0,
		marginTop: 25,
		marginBottom: 25,
	},
	groupCardImageContainer: {
		width: 75,
		height: 75,
		borderRadius: 100,
		overflow: "hidden",
		justifyContent: "center",
		alignItems: "center",
		margin: 15,
	},
	groupCardImage: {
		width: "100%",
		height: "100%",
	},
	groupCardContainer: {
		padding: 25,
	},
	groupName: {
		fontFamily: "Lato_700Bold",
		fontSize: 26,
	},
});
