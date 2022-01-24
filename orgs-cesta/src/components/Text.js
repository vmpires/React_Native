import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function DefaultText({ children, style }) {
    let patternstyle = styles.txt;

    if (style?.fontWeight === "bold") {
        patternstyle = styles.boldtxt;
    }

    return(
        <Text style={[style, patternstyle]}>{ children }</Text>
    )
}

const styles = StyleSheet.create({

    txt: {
        fontFamily: "MontserratRegular",
        fontWeight: "normal",
    },

    boldtxt: {
        fontFamily:"MontserratBold",
        fontWeight: "normal",
    },
})
