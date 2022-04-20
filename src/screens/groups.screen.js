import React from "react";
import { View, Text, ScrollView } from "react-native";
import { GroupScreenStyle } from "../../assets/styles/groupScreen.style";
import { UtilitiesStyles } from "../../assets/styles/utilities.styles";
import { GroupComponent } from "../components/group.component";

const styles = GroupScreenStyle;

export const GroupScreen = (props) => {
	return (
		<ScrollView style={[styles.groupScreenContainer, styles.container]}>
			<View style={styles.viewContainer}>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>UNICDA Groups</Text>
				</View>
				<View style={UtilitiesStyles.centerX}>
					<GroupComponent
						screen={props.navigation.navigate("Members")}
						groupName="Fantastic 4"
					/>
				</View>
			</View>
		</ScrollView>
	);
};
