import React from "react";
import { router } from "expo-router";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>

      <Text style={styles.subtitle}>
        Sign in to continue
      </Text>

      {/* Google Sign In */}
      <TouchableOpacity style={styles.socialButton}>
        <AntDesign
          name="google"
          size={22}
          color="#DB4437"
        />
        <Text style={styles.socialText}>
          Continue with Google
        </Text>
      </TouchableOpacity>

      {/* Apple Sign In */}
      <TouchableOpacity style={styles.socialButton}>
        <AntDesign
          name="apple"
          size={22}
          color="#000"
        />
        <Text style={styles.socialText}>
          Continue with Apple
        </Text>
      </TouchableOpacity>

      {/* Email Sign In */}
      <TouchableOpacity style={styles.socialButton}>
        <Ionicons
          name="mail-outline"
          size={22}
          color="#007AFF"
        />
        <Text style={styles.socialText}>
          Continue with Email
        </Text>
      </TouchableOpacity>

      <Text style={styles.orText}>
        ───── OR ─────
      </Text>

      {/* Email Input */}
      <TextInput
        placeholder="Enter Email"
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />

      {/* Password Input */}
      <TextInput
        placeholder="Enter Password"
        secureTextEntry
        style={styles.input}
      />

      {/* Forgot Password */}
      <TouchableOpacity
        onPress={() => router.push("/forgot-password")}
      >
        <Text style={styles.forgotText}>
          Forgot Password?
        </Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Login
        </Text>
      </TouchableOpacity>

      {/* Sign Up */}
      <TouchableOpacity
        onPress={() => router.push("/signup")}
      >
        <Text style={styles.link}>
          Don't have an account? Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 25,
    backgroundColor: "#F4F7FC",
  },

  title: {
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },

  subtitle: {
    textAlign: "center",
    color: "#666",
    marginBottom: 30,
    fontSize: 15,
  },

  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 12,
    paddingVertical: 14,
    marginBottom: 12,
  },

  socialText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "600",
  },

  orText: {
    textAlign: "center",
    color: "#777",
    marginVertical: 20,
    fontSize: 14,
  },

  input: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
  },

  forgotText: {
    color: "#007AFF",
    textAlign: "right",
    marginBottom: 20,
    fontWeight: "500",
  },

  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 15,
    borderRadius: 12,
  },

  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },

  link: {
    textAlign: "center",
    marginTop: 20,
    color: "#007AFF",
    fontSize: 15,
    fontWeight: "500",
  },
});