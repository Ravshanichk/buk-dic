import React, { useState } from "react";
import { Dimensions, SafeAreaView, StyleSheet, View } from "react-native";

import { ruKzEn } from "../../assets/ruKzEn";
import { rusJur } from "../../assets/jurWords/russianJur";
import { SearchBar } from "../components/SearchBar";
import { TypeSwitcher } from "../components/ui/typeSwitcher";
import { TranslateResult } from "../components/ui/TranslateResult";

export const RuScreen = () => {
  const [kz, setKz] = useState();
  const [en, setEn] = useState();

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = (switchState) => {
    setIsEnabled(switchState)
  };

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
    <SafeAreaView>
    <View style={styles.container}>
      <TypeSwitcher main={"Общий"} legal={"Юридический"} toggleSwitch={toggleSwitch} isEnabled={isEnabled}/>
     
      <SearchBar
        language="ru"
        placeholder={"Введите слово"}
        words={activeDictionary}
        onPress={onSearch}
      />
      <View style={styles.resultsWrapper}>
        {kz ? (
         <TranslateResult langWord={kz} language={"Казахский"}/>
        ) : null}
        {en && (
          <TranslateResult langWord={en} language={"Английский"}/>
        )}
      </View>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  titleResult: {
    width: "100%",
  },
  container: {
    paddingHorizontal: 30,
    paddingTop: 20,
    justifyContent: "flex-start",
    alignItems: "center",
    // borderTopWidth: 1,
    // borderBottomWidth: 1,
    borderColor: "#003366",
    height: Dimensions.get("window").height,
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
  seachButtonContainer: {
    position: "absolute",
    bottom: 20,
  },
});
