import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning-rainy",
    gradient: ["#abbaab", "#ffffff"],
    textColor: "black",
  },
  Drizzle: {
    iconName: "weather-partly-rainy",
    gradient: ["#134e5e", "#71b280"],
    textColor: "black",
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#83a4d4", "#b6fbff"],
    textColor: "black",
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#757f9a", "#d7dde8"],
    textColor: "black",
  },
  Mist: {
    iconName: "weather-cloudy",
    gradient: ["#556270", "#ff6b6b"],
    textColor: "black",
  },
  Smoke: {
    iconName: "weather-fog",
    gradient: ["#6441A5", "#2a0845"],
    textColor: "black",
  },
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#085078", "#85d8ce"],
    textColor: "black",
  },
  Dust: {
    iconName: "weather-fog",
    gradient: ["#948E99", "#2E1437"],
    textColor: "black",
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#0b8793", "#360033"],
    textColor: "black",
  },
  Sand: {
    iconName: "drama-masks",
    gradient: ["#ffb347", "#ffb347"],
    textColor: "black",
  },
  Ash: {
    iconName: "drama-masks",
    gradient: ["#ffa17f", "#00223e"],
    textColor: "black",
  },
  Squall: {
    iconName: "weather-windy",
    gradient: [],
    textColor: "black",
  },
  Tornado: {
    iconName: "weather-tornado",
    gradient: ["#5f2c82", "#49a09d"],
    textColor: "black",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#FEAC5E", "#C779D0", "#4BC0C8"],
    textColor: "black",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#43cea2", "#185a9d"],
    textColor: "black",
  },
};
export default function Weather({ temp, condition, description }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.container_half}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={128}
          color="#949CDF"
        />
        <Text
          style={styles.text_temp}
          style={{ color: weatherOptions[condition].textColor }}
        >
          {temp}℃
        </Text>
      </View>
      <View style={styles.container_half}>
        <Text>{condition}</Text>
        <Text>{description}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Ash",
    "Squall",
    "Tornado",
    "Clear",
    "Clouds",
  ]).isRequired,
  description: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container_half: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text_temp: {
    fontSize: 32,
    color: "white",
  },
});
