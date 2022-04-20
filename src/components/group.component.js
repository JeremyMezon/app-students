import React from "react";
import { View, Text, Image } from "react-native";
import { GroupCardStyle } from "../../assets/styles/groupCard.style";

const style = GroupCardStyle;

export const GroupComponent = (props) => {
	return (
		<View style={style.groupCard}>
			<View style={style.groupCardImageContainer}>
				<Image
					resizeMode="contain"
					style={style.groupCardImage}
					source={require("../../assets/img/Fantastic_Four_logo.png")}
				/>
			</View>
			<View style={style.groupCardContainer}>
				<Text style={style.groupName}>{props.groupName}</Text>
				<View>
					<Text></Text>
					<Text>... Integrantes</Text>
				</View>
			</View>
		</View>
	);
};
