import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import DefaultText from '../components/Text'
import DefaultButton from '../components/Button'

export default function List_Items() {
  return (
        <View style={styles.container}>

        <FlatList
            data={[
            {key: 'Programming'},
            {key: 'Swimming'},
            {key: 'Playing Games'},
            {key: 'Eating'},
            {key: 'Make love'},
            {key: 'Napping'},
            ]}
            renderItem={({item}) => <DefaultText style={styles.item}>{item.key}</DefaultText>}
        />
        <DefaultButton>New task...</DefaultButton>
        </View>
  );
}

const styles = StyleSheet.create({
  item: {
      color: "#9C0D0D",
      padding: 10,
      fontSize: 18,
      height: 60,
      marginLeft: 70,
    },
  container: {
    justifyContent: "center",
    paddingHorizontal: 5
  },
  
});

