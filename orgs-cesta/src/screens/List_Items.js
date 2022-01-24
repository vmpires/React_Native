import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import DefaultText from '../components/Text'


const styles = StyleSheet.create({
    container: {
        paddingTop: 5,
        paddingLeft: 75,
    },
    item: {
        color: "#9C0D0D",
        padding: 10,
        fontSize: 18,
        height: 60,
      },
  });

export default function List_Items() {
  return (
        <View style={styles.container}>

        <FlatList
            data={[
            {key: 'Programar'},
            {key: 'Nadar'},
            {key: 'Jogar'},
            {key: 'Comer'},
            {key: 'Namorar'},
            {key: 'Cochilar'},
            ]}
            renderItem={({item}) => <DefaultText style={styles.item}>{item.key}</DefaultText>}
        />
        </View>
  );
}

