import { StatusBar } from "expo-status-bar";
import React from "react";
import axios from "axios";
import * as Location from "expo-location";
import { Alert } from "react-native";
import { StyleSheet, Text, View } from "react-native";

import LoadSplash from "./LoadSplash";
import Weather from "./Weather";

const API_KEY = "811cc62ce702483a88dc8fcf9a1ef6aa";

export default class App extends React.Component {
  state = {
    isLoading: true,
  };
  getWeather = async (lat, lon, altit) => {
    try {
      const {
        data: {
          main: { temp },
          weather,
        },
      } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      this.setState({
        isLoading: false,
        temp: temp,
        condition: weather[0].main,
        description: weather[0].description,
      });
    } catch (error) {
      console.log(error);
    }
  };
  getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      //requestPermissionsAsync는 deprecated!
      const {
        coords: { latitude, longitude, altitude },
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude, altitude);
    } catch (error) {
      Alert.alert("Loaction permission denied :(", "Unfortunate Situation...");
    }
  };

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, temp, condition, description } = this.state;
    return isLoading ? (
      <LoadSplash />
    ) : (
      <Weather temp={temp} condition={condition} description={description} />
    );
  }
}
// <View style={styles.container}>
//   <Text style={styles.text}>The first Expo App in WSL(김준영)!!!!</Text>
//   <Text style={styles.text}>[Second Text]</Text>
//   <StatusBar style="auto" />
//   <View style={styles.yellowView}>
//     <Text>Yellow View</Text>
//   </View>
//   <View style={styles.blueView}>
//     <Text>Blue Biew</Text>
//   </View>
//   <View style={styles.yellowView}>
//     <Text>Yellow View</Text>
//   </View>
// </View>
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    //alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  text: {
    color: "yellow",
  },
  yellowView: {
    flex: 2,
    backgroundColor: "yellow",
  },
  blueView: {
    flex: 1,
    backgroundColor: "blue",
  },
});
