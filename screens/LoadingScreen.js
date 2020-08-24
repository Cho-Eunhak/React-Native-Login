import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

export default class LoadingScreen extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.props.navigation.navigate(user ? "App" : "Auth");
    });
  }

  render() {
    return (
      <View styles={styles.container}>
        <Text>Loading Screen</Text>
        <ActivityIndicator size="large"></ActivityIndicator>
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
});
