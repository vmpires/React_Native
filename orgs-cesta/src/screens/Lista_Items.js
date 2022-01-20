import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: 5,
        paddingLeft: 75,
    },
    item: {
        color: "#A2A2A2",
        padding: 10,
        fontSize: 18,
        height: 60,
        fontFamily: "MontserratRegular",
      },
  });

export default function Lista_Items() {
  return (
        <View style={styles.container}>

        <FlatList
            data={[
            {key: 'Programar'},
            {key: 'Nadar'},
            {key: 'Jogar'},
            {key: 'Comer'},
            {key: 'Namorar'},
            {key: 'Cochilo'},
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
        </View>
  );
}

