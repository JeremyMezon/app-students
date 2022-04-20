import React from "react";
import { View, Text, ScrollView, Button } from "react-native";
import { UtilitiesStyles } from "../../assets/styles/utilities.styles";
import { GroupComponent } from "../components/group.component";

const styles = {};

export const MembersScreen = (props) => {
	return (
		<ScrollView style={[styles.groupScreenContainer, styles.container]}>
			<View style={styles.viewContainer}>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>Members</Text>
				</View>
				<View style={UtilitiesStyles.centerX}>
					<GroupComponent groupName="Fantastic 4" />
				</View>
				<Button
					title="Back to Groups"
					onPress={() => props.navigation.navigate("Groups")}
				/>
			</View>
		</ScrollView>
	);
};
