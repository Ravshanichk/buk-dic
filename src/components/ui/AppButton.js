import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Platform, TouchableNativeFeedback } from "react-native";
import constats from "../../constats";

export const AppButton =({children, onPress, backgroundColor=constats.MAIN_COLOR,buttonWidth=0, height, width, borderRadius=5})=>{
    let Wrapper = (
        Platform.OS==="android"?TouchableNativeFeedback:TouchableOpacity
    )
    return(
        <Wrapper onPress={onPress} activeOpacity={0.7}>
            <View style={{...styles.button, backgroundColor: backgroundColor, height, width,borderRadius }}>
                <Text style={{...styles.text, marginHorizontal: buttonWidth}}>{children}</Text>
            </View>
        </Wrapper>
    )
}

const styles = StyleSheet.create({
    button:{
        padding: 10,
        borderRadius: 4,
        flexDirection: "row",
        alignItems:"center",
        justifyContent: "center",
    },
    text:{
        color: "#ffff",
    }
})