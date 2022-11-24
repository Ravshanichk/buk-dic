import React, { useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";

import { kzJur } from "../../assets/jurWords/kazakhJur";
import { SearchBar } from "../components/SearchBar";
import { kzRuEn } from "../../assets/kzRuEn";
import { TypeSwitcher } from "../components/ui/typeSwitcher";
import { TranslateResult } from "../components/ui/TranslateResult";

export const KzScreen = () => {
  const [ru, setRu] = useState();
  const [en, setEn] = useState();

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const activeDictionary = isEnabled?kzJur:kzRuEn;

  const onSearch = (word) => {
    if (activeDictionary.some((data) => data.kz === word)) {
      activeDictionary.map((w) => {
        if (w.kz === word) {
          if (w.ru.includes("; ")) {
            let ruRes = w.kz.split("; ");
            setRu(ruRes);
          } else {
            setRu(w.ru);
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
      <TypeSwitcher main={"Жалпы"} legal={"Заңды"} toggleSwitch={toggleSwitch} isEnabled={isEnabled}/>
      <SearchBar
        language="kz"
        placeholder={"Сөз енгізіңіз"}
        words={activeDictionary}
        onPress={onSearch}
      />
      <View style={styles.resultsWrapper}>
      {ru ? (
         <TranslateResult langWord={ru} language={"Орыс"}/>
        ) : null}
        {en && (
          <TranslateResult langWord={en} language={"Ағылшын"}/>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleResult: {
    width: "100%",
  },
  container: {
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
  seachButtonContainer: {
    position: "absolute",
    bottom: 20,
  },
});
