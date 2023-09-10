import React, {Component} from "react";
import {Image, View, Text, TouchableOpacity, StyleSheet} from "react-native"

import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from "./Navigation/StackNavigation"

function App() {
  return (
    <NavigationContainer>
     <StackNavigator/>
    </NavigationContainer>
  );
}

export default App;