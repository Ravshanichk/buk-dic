import React from "react";
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import { AppText } from "./ui/AppText";

export const FilteredItem = ({word, onOpen})=>{


    return(
        <TouchableOpacity activeOpacity={0.5} onPress={()=>onOpen(todo.id)}>
            <View style={styles.todo}>
            <AppText>{todo.title}</AppText>
        </View>
        </TouchableOpacity>
        
    )
}

const styles=StyleSheet.create({
    todo:{
        padding:15,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#eee",
        borderRadius: 4,
        marginBottom: 10,
    },
})