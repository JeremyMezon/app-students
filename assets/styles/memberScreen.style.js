import { StyleSheet } from "react-native";

export const MemberScreenStyles = StyleSheet.create({
	memberHeader: {
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		height: 350,
		borderBottomWidth: 4,
		borderBottomColor: "#58FCEC",
	},
	memberImage: {
		width: 150,
		height: 150,
		marginBottom: 15,
		borderRadius: 100,
		overflow: "hidden",
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 2,
		borderColor: "#FFFFFF",
	},
	memberTitle: {
		marginTop: 15,
		marginBottom: 15,
		justifyContent: "center",
		alignItems: "center",
	},
	memberName: {
		color: "#FFFFFF",
		fontFamily: "Lato_700Bold",
		fontSize: 32,
	},
	memberID: {
		fontFamily: "Lato_300Light",
		fontSize: 21,
		color: "#FFFFFF",
		marginTop: 5,
	},
	dataMemberContainer: {
		padding: 30,
		borderTopWidth: 5,
		borderTopColor: "#0077B6",
	},
	dataMemberBox: {
		flexDirection: "row",
		alignItems: "center",
		padding: 15,
		marginTop: 15,
		marginBottom: 15,
	},
	boxInfo: {
		marginLeft: 15,
	},
	title: {
		fontFamily: "Lato_700Bold",
		fontSize: 20,
		marginBottom: 5,
	},
	info: {
		fontSize: 18,
		fontFamily: "Lato_400Regular",
	},
	hobbieBox: {
		paddingTop: 9,
		paddingRight: 25,
		paddingBottom: 9,
		paddingLeft: 25,
		marginTop: 3,
		marginBottom: 3,
		backgroundColor: "#F1F1F1",
		borderRadius: 100,
	},
	hobbie: {
		fontSize: 16,
		fontFamily: "Lato_400Regular",
	},
});
