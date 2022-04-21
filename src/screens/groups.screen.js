import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { GroupScreenStyle } from "../../assets/styles/groupScreen.style";
import { UtilitiesStyles } from "../../assets/styles/utilities.styles";
import { GroupComponent } from "../components/group.component";
import { Integrantes } from "../../data.json";

const styles = GroupScreenStyle;

export class GroupScreen extends React.Component {
	students = Integrantes;

	componentDidMount() {
		this.students = Integrantes;
	}

	render() {
		return (
			<ScrollView style={[styles.groupScreenContainer, styles.container]}>
				<View style={styles.viewContainer}>
					<View style={styles.titleContainer}>
						<View style={styles.imageContainer}>
							<Image
								resizeMode="contain"
								style={styles.image}
								source={require("../../assets/img/grupo.jpg")}
							/>
						</View>
						<Text style={styles.title}>JRC Group</Text>
					</View>
					<View>
						{this.students.map((student) => (
							<View key={student.Matricula} style={UtilitiesStyles.centerX}>
								<GroupComponent
									context={this.props.navigation}
									data={student}
								/>
							</View>
						))}
					</View>
				</View>
				<View style={styles.footer}>
					<Text style={styles.copyright}>
						Copyright, Todos los derechos reservados
					</Text>
				</View>
			</ScrollView>
		);
	}
}
