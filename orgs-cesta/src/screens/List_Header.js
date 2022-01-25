import React from 'react';
import { Image, StyleSheet, Dimensions, View} from 'react-native';
import DefaultText from '../components/Text'

import top from "../../assets/top-image.png"

const height = Dimensions.get('screen').height;

export default function List_Header( { username, listname, listlogo}) {
        return <>
            <Image source={top} style={styles.top}></Image>
            <View style={styles.container1}>
            <DefaultText style={styles.username}>{ username }</DefaultText>
                <View style={styles.container2}>
                    <Image source={listlogo} style={styles.listlogo}></Image>
                    <DefaultText style={styles.listname}>{ listname }</DefaultText>
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
            fontWeight: "bold",
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
            marginLeft:3,

        },
})