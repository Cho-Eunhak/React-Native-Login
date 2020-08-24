import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Logo = () => {
  return (
    <View>
      <Image
        style={{
          margintop: -110,
          alignSelf: "center",
          height: 160,
          width: 160,
        }}
        source={require("./myongji.jpg")}
      ></Image>
    </View>
  );
};

export default Logo;
