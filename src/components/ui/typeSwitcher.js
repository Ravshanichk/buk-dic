import React from "react";
import { Text, View, StyleSheet, Switch, TouchableOpacity, Dimensions } from "react-native";
import constats from "../../constats";

export const TypeSwitcher = ({ toggleSwitch, isEnabled, main, legal }) => {

  const switchColor = isEnabled?constats.MAIN_COLOR:"white"

  return (
    // <View style={styles.switchContainer}>
    //   <View style={styles.textTypeCon}>
    //     <Text style={{ fontWeight: isEnabled ? "normal" : "bold" }}>{main}</Text>
    //   </View>

    //   <Switch
    //     trackColor={{ false: "#81b0ff", true: "#81b0ff" }}
    //     thumbColor={"#f4f3f4"}
    //     ios_backgroundColor="#3e3e3e"
    //     onValueChange={toggleSwitch}
    //     value={isEnabled}
    //   />
    //   <View style={styles.textTypeCon}>
    //     <Text style={{ fontWeight: isEnabled ? "bold" : "normal" }}>
    //       {legal}
    //     </Text>
    //   </View>
    // </View>
    <View style={styles.switchContainer}>
      <TouchableOpacity onPress={()=>toggleSwitch(false)} >
        <View style={{...styles.textTypeCon, backgroundColor: isEnabled?"white":constats.MAIN_COLOR}}>
            <Text style={{...styles.text, color: isEnabled ? "black" : "white" }}>
              {main}
            </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>toggleSwitch(true)}>
        <View style={{...styles.textTypeCon, backgroundColor: isEnabled?constats.MAIN_COLOR:"white"}}>
            <Text style={{...styles.text, color: isEnabled ? "white" : "black"}}>
              {legal}
            </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 17,
  },
  textTypeCon: {
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 40,
    width: Dimensions.get('window').width>400 ? 160: 140,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 20,
   
    borderRadius:40,
    borderColor: constats.MAIN_COLOR,
    borderWidth: 1,
  },
});
