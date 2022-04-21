import React from "react";
import {
	View,
	Text,
	ScrollView,
	Button,
	Image,
	ImageBackground,
} from "react-native";
import { UtilitiesStyles } from "../../assets/styles/utilities.styles";
import { MemberScreenStyles } from "../../assets/styles/memberScreen.style";
import { Icon } from "@rneui/themed";
const styles = MemberScreenStyles;
const commonStyles = UtilitiesStyles;

export const MembersScreen = ({ navigation, route }) => {
	const Member = route.params.member;

	return (
		<ScrollView style={[styles.memberScreenContainer, commonStyles.bgWhite]}>
			<ImageBackground
				source={require("../../assets/img/fondo.png")}
				resizeMode="cover"
				style={styles.memberHeader}
			>
				<View style={styles.memberImage}>
					<Image
						resizeMode="cover"
						style={commonStyles.image}
						source={{ uri: Member.Foto }}
					/>
				</View>
				<View style={styles.memberTitle}>
					<Text style={styles.memberName}>{Member.Nombre}</Text>
					<Text style={styles.memberID}>{Member.Matricula}</Text>
				</View>
			</ImageBackground>
			<View style={styles.dataMemberContainer}>
				<View style={styles.dataMemberBox}>
					<View>
						<Icon name="location-pin" color="#00aced" />
					</View>
					<View style={styles.boxInfo}>
						<Text style={styles.title}>Lugar de Nacimiento</Text>
						<Text style={styles.info}>{Member.CiudadNac}</Text>
					</View>
				</View>
				<View style={styles.dataMemberBox}>
					<View>
						<Icon name="games" color="#00aced" />
					</View>
					<View style={styles.boxInfo}>
						<Text style={styles.title}>Hobbies</Text>
						{Member.Hobbies.map((hobbie) => (
							<View style={styles.hobbieBox}>
								<Text style={styles.hobbie}>{hobbie}</Text>
							</View>
						))}
					</View>
				</View>
			</View>
			<Button
				title="Back to Groups"
				onPress={() => navigation.navigate("Groups")}
			/>
		</ScrollView>
	);
};
