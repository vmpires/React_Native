import React from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';
import List_Header from './src/screens/List_Header';
import List_Items from './src/screens/List_Items';
import {useFonts, MontserratAlternates_400Regular, MontserratAlternates_700Bold } from '@expo-google-fonts/montserrat-alternates'
import AppLoading from 'expo-app-loading';
import mock from "./src/mocks/list"

export default function App() {
  const [defaultfont] = useFonts({
    "MontserratRegular": MontserratAlternates_400Regular,
    "MontserratBold": MontserratAlternates_700Bold,
  });

  if (!defaultfont){
    return <AppLoading />
  }

  return (
    <SafeAreaView>
      <StatusBar/>
      <List_Header {...mock}/>
      <List_Items/>
    </SafeAreaView>
  );
}

