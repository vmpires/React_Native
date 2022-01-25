import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import DefaultText from './Text'

export default function DefaultButton ({ children }) {

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <DefaultText style={styles.text}>{ children }</DefaultText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingHorizontal: 5
  },
  button: {
    alignItems: "center",
    backgroundColor: "#3D3737",
    padding: 10,
    borderRadius: 6,
  },
  text:{
      color: "#FFFFFF",
  }
});
