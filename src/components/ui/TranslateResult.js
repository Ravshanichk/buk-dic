import React from "react";
import { Text, View, StyleSheet} from "react-native";
import constats from "../../constats";

export const TranslateResult = ({langWord, language}) => {
  return (
    <View style={styles.result}>
    <Text style={styles.headerResult}>{language}</Text>
    {Array.isArray(langWord) ? (
      langWord.map((w, index) => {
        return (
          <Text style={styles.resultText} key={index}>
            {w}
          </Text>
        );
      })
    ) : (
      <Text style={styles.resultText}>{langWord}</Text>
    )}
  </View>
  )
};

const styles = StyleSheet.create({
    headerResult: {
        fontFamily: "roboto-regular",
        fontSize: 14,
        color: "#a2a1a7",
        fontStyle: "italic"
      },
      result: {
        width: "100%",
        fontFamily: constats.poppins_light,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 4,
        shadowColor: "#000",
        shadowRadius: 2,
        shadowOpacity: 0.3,
        shadowOffset: { width: 2, height: 2 },
        backgroundColor: "#fff",
    
        elevation: 7,
        marginVertical: 10,
      },
      resultText: {
        fontSize: 22,
        fontFamily: "serif"
      },
});
