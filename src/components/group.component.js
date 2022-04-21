import React from "react";
import { View, Text, Image } from "react-native";
import { GroupCardStyle } from "../../assets/styles/groupCard.style";

const style = GroupCardStyle;

export const GroupComponent = (props, { navigation }) => {
	return (
		<View
			onTouchEnd={() => {
				props.context.navigate("Members", { member: props.data });
			}}
			style={style.groupCard}
		>
			<View style={style.groupCardImageContainer}>
				<Image
					resizeMode="cover"
					style={style.groupCardImage}
					source={{ uri: props.data.Foto }}
				/>
			</View>
			<View style={style.groupCardContainer}>
				<Text style={style.groupName}>{props.data.Nombre}</Text>
				<View>
					<Text>{props.data.Matricula}</Text>
				</View>
			</View>
		</View>
	);
};
