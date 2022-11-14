import React from "react";
import { View, Text, StyleSheet} from "react-native";

export const TabIcon =({name})=>{

    return(
            <View >
                <Text style={styles.wrapper} >{name}</Text>
            </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        backgroundColor: "black",
        margin: 10
    }
})