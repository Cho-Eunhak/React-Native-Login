import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

export default class HomeScreen extends React.Component {
  state = {
    email: "",
    displayName: "",
    workhour: "",
  };

  componentDidMount() {
    const { email, displayName } = firebase.auth().currentUser;
    this.setState({ email, displayName });
  }

  signOutUser = () => {
    firebase.auth().signOut();
  };

  render() {
    return (
      <View>
        <View>
          <Calendar></Calendar>
        </View>
        <Text style={styles.email}>
          {this.state.email}님{"\n"} 이달의 과제 현황입니다.
        </Text>

        <TouchableOpacity style={styles.logout} onPress={this.signOutUser}>
          <Text style={{ color: "#FFF", fontWeight: "300" }}>로그아웃</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  email: {
    marginTop: 30,
    justifyContent: "center",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  logout: {
    marginHorizontal: 30,
    backgroundColor: "#000080",
    borderRadius: 4,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 170,
  },
});
