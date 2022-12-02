import React, { useState } from "react";
import { Dimensions, SafeAreaView, StyleSheet, View } from "react-native";

import { enRuKz } from "../../assets/enRuKz";
import { enJur } from "../../assets/jurWords/enJur";
import { SearchBar } from "../components/SearchBar";
import { TranslateResult } from "../components/ui/TranslateResult";
import { TypeSwitcher } from "../components/ui/typeSwitcher";

export const EngScreen = () => {
  const [kz, setKz] = useState();
  const [ru, setRu] = useState();

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const activeDictionary = isEnabled?enJur:enRuKz;

  const onSearch = (word) => {
    if (activeDictionary.some((data) => data.en === word)) {
      activeDictionary.map((w) => {
        if (w.en === word) {
          if (w.kz.includes("; ")) {
            let kzRes = w.kz.split("; ");
            setKz(kzRes);
          } else {
            setKz(w.kz);
          }
          if (w.ru.includes("; ")) {
            let ruRes = w.ru.split("; ");
            setRu(ruRes);
          } else {
            setRu(w.ru);
          }
        }
      });
    }
  };

  return (
    <SafeAreaView>
    <View style={styles.container}>
      <TypeSwitcher main={"General"} legal={"Law"} toggleSwitch={toggleSwitch} isEnabled={isEnabled}/>
     
      <SearchBar
        language="en"
        placeholder={"Type a word"}
        words={activeDictionary}
        onPress={onSearch}
      />
      <View style={styles.resultsWrapper}>
      {kz ? (
         <TranslateResult langWord={kz} language={"Qazaq"}/>
        ) : null}
        {ru && (
          <TranslateResult langWord={ru} language={"Russian"}/>
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
