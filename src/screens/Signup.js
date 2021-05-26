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
export default function Signup({ navigation }) {
  const [payload, setPayload] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });
  const handleChange = (prop) => (event) => {
    setPayload({ ...payload, [prop]: event.target.value });
  };

  const register = (event) => {
    event.preventDefault();

    if (!payload.email || !payload.password || !payload.confirmpassword) {
      alert("Please complete all fields!");
    } else if (payload.confirmpassword !== payload.password) {
      alert("Password do not match");
    } else if (payload.password.length <= 5) {
      alert("Password should be at least 6 characters");
    } else {
      setPayload({ ...payload, errors: "" });
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then((userCredential) => {
          alert("You have sign up successfully");
          navigation.navigate("Login");
          firebase
            .auth()
            .signOut()
            .then(() => {
              // Sign-out successful.
            })
            .catch((error) => {
              // An error happened.
            });
          // Signed in

          // var user = userCredential.email;

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
      <Text style={styles.title}>Register</Text>
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
      <TextInput
        value={payload.confirmpassword}
        placeholder="Confirm password"
        style={styles.fields}
        secureTextEntry={true}
        onChange={handleChange("confirmpassword")}
      ></TextInput>
      <TouchableOpacity style={styles.button} onPress={register}>
        <Text style={styles.text}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={login}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.text}>Login</Text>
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

const login = StyleSheet.compose(styles.button, styles.loginBtn);
