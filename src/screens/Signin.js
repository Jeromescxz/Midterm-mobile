import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";
import firebase from "../utils/firebase";
import Home from "./Home";

export default function Signin({ navigation }) {
  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });
  const handleChange = (prop) => (event) => {
    setPayload({ ...payload, [prop]: event.target.value });
  };

  const login = (event) => {
    event.preventDefault();

    if (!payload.email || !payload.password) {
      alert("Please complete all fields!");
    } else {
      setPayload({ ...payload, errors: "" });
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then((signedInUser) => {
          // Signed in
          alert("Welcome " + signedInUser.user.email);
          navigation.navigate("Home");
          // ...
        })
        .catch((error) => {
          // var errorCode = error.code;
          var errorMessage = error.message;
          // ..
          alert(errorMessage);
        });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log in</Text>
      <TextInput
        value={payload.email}
        placeholder="Email"
        style={styles.fields}
        onChange={handleChange("email")}
      ></TextInput>
      <TextInput
        value={payload.password}
        placeholder="Password"
        style={styles.fields}
        secureTextEntry={true}
        onChange={handleChange("password")}
        
      ></TextInput>
      <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={styles.text}>Log in</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={signup}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.text}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
  },
  fields: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin: 3,
    borderRadius: 5,
    padding: 5,
  },
  button: {
    backgroundColor: "#0c9167",
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    padding: 5,
    margin: 3,
  },
  text: {
    color: "black",
  },
  button: {
    backgroundColor: "#0c9167",
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    padding: 5,
    margin: 3,
  },
  loginBtn: {
    backgroundColor: "#b9babd",
  },
  title: {
    color: "black",
    fontSize: 30,
  },
});

const signup = StyleSheet.compose(styles.button, styles.loginBtn);
