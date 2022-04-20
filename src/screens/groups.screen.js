import React from "react";
import { View, Text, ScrollView } from "react-native";
import { GroupScreenStyle } from "../../assets/styles/groupScreen.style";
import { UtilitiesStyles } from "../../assets/styles/utilities.styles";
import { GroupComponent } from "../components/group.component";

const styles = GroupScreenStyle;

export const GroupScreen = () => {
	return (
		<ScrollView style={styles.groupScreenContainer}>
			<View style={styles.viewContainer}>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>UNICDA Groups</Text>
				</View>
				<View style={UtilitiesStyles.centerX}>
					<GroupComponent groupName="Fantastic 4" />
				</View>
			</View>
		</ScrollView>
	);
};
