import React from "react";
import { View, Text, ScrollView } from "react-native";
import { GroupScreenStyle } from "../../assets/styles/groupSreen.style";
import { UtilitiesStyles } from "../../assets/styles/utilities.styles";

const styles = GroupScreenStyle;

export const GroupScreen = () => {
	return (
		<ScrollView style={styles.groupScreenContainer}>
			<View style={styles.viewContainer}>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>UNICDA Groups</Text>
				</View>
				{/* Component of Groups */}
			</View>
		</ScrollView>
	);
};
