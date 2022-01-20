import React from 'react';
import { Image, StyleSheet, Dimensions, Text, View, FlatList } from 'react-native';

import top from "../../assets/top-image.png"
import listlogo from "../../assets/list-logo.png"

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function Header() {
        return <>
            <Image source={top} style={styles.top}></Image>
            <View style={styles.container1}>
                <Text style={styles.username}>Victor's List</Text>
                <View style={styles.container2}>
                    <Image source={listlogo} style={styles.listlogo}></Image>
                    <Text style={styles.listname}>Daily errands</Text>
                </View>
            </View>
        </>
}

const styles = StyleSheet.create({
        top: {
        width: "100%",
        height: height/4.2,
        },
        container1:{
            paddingHorizontal: 15,
            paddingVertical: 10,
        },
        username:{
            color: "black",
            fontSize: 30,
            lineHeight: 42,
            fontFamily: "MontserratBold"

        },
        container2:{
            flexDirection:'row',
            paddingLeft:15,
        },
        listlogo:{
            width:32,
            height:32,
            marginTop: 3,
        },
        listname:{
            color:"black",
            fontSize: 18,
            lineHeight: 35,
            fontFamily: "MontserratBold",
            marginLeft:3,

        },
})