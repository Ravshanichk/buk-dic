import React, { useState } from "react";
import { Alert, Dimensions, StyleSheet, Switch, Text, View } from "react-native";

import { ruKzEn } from "../../assets/ruKzEn";
import { rusJur } from "../../assets/jurWords/russianJur";
import { SearchBar } from "../components/SearchBar";
import constats from "../constats";

export const RuScreen = () => {
  const [kz, setKz] = useState();
  const [en, setEn] = useState();

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const activeDictionary = isEnabled?rusJur:ruKzEn;

  const onSearch = (word) => {
    if (activeDictionary.some((data) => data.ru === word)) {
      activeDictionary.map((w) => {
        if (w.ru === word) {
          if (w.kz.includes("; ")) {
            let kzRes = w.kz.split("; ");
            setKz(kzRes);
          } else {
            setKz(w.kz);
          }
          if (w.en.includes("; ")) {
            let enRes = w.en.split("; ");
            setEn(enRes);
          } else {
            setEn(w.en);
          }
        }
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.switchContainer}>
        <Text style={{fontWeight:isEnabled?"normal":"bold"}}>Общий</Text>
        <Switch
          trackColor={{ false: "#81b0ff", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
         <Text style={{fontWeight:isEnabled?"bold":"normal"}}>Юридический</Text>
      </View>
     
      <SearchBar
        language="ru"
        placeholder={"Введите слово"}
        words={activeDictionary}
        onPress={onSearch}
      />
      <View style={styles.resultsWrapper}>
        {kz ? (
          <View style={styles.result}>
            <Text style={styles.headerResult}>Казахский</Text>
            {Array.isArray(kz) ? (
              kz.map((w, index) => {
                return (
                  <Text style={styles.resultText} key={index}>
                    {w}
                  </Text>
                );
              })
            ) : (
              <Text style={styles.resultText}>{kz}</Text>
            )}
          </View>
        ) : null}
        {en && (
          <View style={styles.result}>
            <Text style={styles.headerResult}>Английский</Text>
            {Array.isArray(en) ? (
              en.map((w, index) => {
                return (
                  <Text style={styles.resultText} key={index}>
                    {w}
                  </Text>
                );
              })
            ) : (
              <Text style={styles.resultText}>{en}</Text>
            )}
          </View>
        )}
      </View>
      {/* <View style={styles.seachButtonContainer}>
        <AppButton borderRadius={20}>
          <AntDesign name="search1" color="white" size={20} />
        </AppButton>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  switchContainer:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 6
  },
  headerResult: {
    fontFamily: "roboto-regular",
    fontSize: 14,
    color: "#a2a1a7",
  },
  titleResult: {
    width: "100%",
  },
  container: {
    backgroundColor: "white",
    paddingHorizontal: 30,
    paddingTop: 5,
    justifyContent: "flex-start",
    alignItems: "center",
    // borderTopWidth: 1,
    // borderBottomWidth: 1,
    borderColor: "#003366",
    height: Dimensions.get("window").height - 135,
    with: Dimensions.get("window").width,
  },
  resultsWrapper: {
    width: "100%",
    marginTop: 30,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    // borderRadius: 4,
    // shadowColor: "#000",
    // shadowRadius: 2,
    // shadowOpacity: 0.3,
    // shadowOffset: { width: 2, height: 2 },
    // backgroundColor: "#fff",

    // elevation: 7,
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
    fontSize: 18,
  },
  seachButtonContainer: {
    position: "absolute",
    bottom: 20,
  },
});
