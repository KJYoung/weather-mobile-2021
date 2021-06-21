import { styleSheets } from "min-document";
import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function LoadSplash() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.loadText}>Hi! Loading...{"\n"}the weather..</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "#FDF6AA",
  },
  loadText: {
    color: "#2c2c2c",
    fontSize: 30,
  },
});
