import React from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';
import Header from './src/screens/Header';
import Lista_Items from './src/screens/Lista_Items';
import {useFonts, MontserratAlternates_400Regular, MontserratAlternates_700Bold } from '@expo-google-fonts/montserrat-alternates'

export default function App() {
  const [defaultfont] = useFonts({
    "MontserratRegular": MontserratAlternates_400Regular,
    "MontserratBold": MontserratAlternates_700Bold,
  });

  if (!defaultfont){
    return <View />
  }

  return (
    <SafeAreaView>
      <StatusBar/>
      <Header/>
      <Lista_Items/>
    </SafeAreaView>
  );
}

