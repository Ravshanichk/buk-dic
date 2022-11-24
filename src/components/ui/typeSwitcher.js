import React from "react";
import { Text, View, StyleSheet, Switch} from "react-native";
import { isEnabled } from "react-native/Libraries/Performance/Systrace";

export const TypeSwitcher = ({toggleSwitch, isEnabled, main, legal}) => {
  return (
    <View style={styles.switchContainer}>
      <View style={styles.textTypeCon}>
        <Text style={{ fontWeight: isEnabled ? "normal" : "bold" }}>{main}</Text>
      </View>

      <Switch
        trackColor={{ false: "#81b0ff", true: "#81b0ff" }}
        thumbColor={"#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <View style={styles.textTypeCon}>
        <Text style={{ fontWeight: isEnabled ? "bold" : "normal" }}>
          {legal}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypeCon: {
    margin: 2,

  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 6,
    paddingHorizontal: 30
  },
});
