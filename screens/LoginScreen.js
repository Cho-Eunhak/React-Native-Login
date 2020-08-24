import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import Logo from "./Logo";
export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    email: "",
    password: "",
    errorMessage: null,
  };

  handleLogin = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => this.setState({ errorMessage: error.message }));
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"></StatusBar>
        <View style={styles.logocontainer}>
          <Logo />
        </View>
        <Text style={styles.greeting}>명지대학교</Text>
        <View style={styles.errorMessage}>
          {this.state.errorMessage && (
            <Text style={styles.error}>{this.state.errorMessage}</Text>
          )}
        </View>
        <View style={styles.form}>
          <View>
            <Text style={styles.inputTitle}>이메일</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              onChangeText={(email) => this.setState({ email })}
              value={this.state.email}
            ></TextInput>
          </View>

          <View style={{ marginTop: 32 }}>
            <Text style={styles.inputTitle}>비밀번호</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              onChangeText={(password) => this.setState({ password })}
              secureTextEntry
              value={this.state.password}
            ></TextInput>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
          <Text style={{ color: "#FFF", fontWeight: "300" }}>로그인</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ alignSelf: "center", marginTop: 32 }}
          onPress={() => this.props.navigation.navigate("REGISTER")}
        >
          <Text styles={{ fontSize: 15 }}>회원가입</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  greeting: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
  },
  logocontainer: {
    flex: 0.7,
    alignItems: "center",
    justifyContent: "center",
  },
  errorMessage: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30,
  },
  error: {
    color: "#E9446A",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
  },
  form: {
    marginBottom: 48,
    marginHorizontal: 30,
  },
  input: {
    borderBottomColor: "#8A8F9E",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: "#161F3D",
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: "#000080",
    borderRadius: 4,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
  },
});
