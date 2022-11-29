import { AntDesign } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Dimensions, Keyboard, FlatList, StyleSheet, Text, TextInput, View, Alert, TouchableOpacity } from "react-native";
import { classic } from "react-native-web/dist/cjs/exports/StyleSheet/compiler";
import constats from "../constats";
import { AppButton } from "./ui/AppButton";

export const SearchBar = ({language, onPress, words, placeholder }) => {
  const [value, setValue] = useState("");
  const [filteredWord, setFilter] = useState();

  useEffect(()=>{
    setFilter(null)
  },[words])

  const pressHandler = () => {
    if (value.trim()) {
      onPress(value);
      setFilter(null);
      Keyboard.dismiss()
    } 
  };

  const pressSuggestionHandler = (word) => {
    setValue(word)
    onPress(word);
    setFilter(null);
    Keyboard.dismiss()
  }

  const changeHandler = (text)=> {
      setValue(text);
      const resultArray = words.filter((data)=>{
        const searchTerm = text.toLowerCase()
        let filteredWord
        if(language=="ru"){
          filteredWord = data.ru.trim().toLowerCase();
        } else if(language=="kz"){
          filteredWord = data.kz.trim().toLowerCase();
        } else if(language=="en"){
          filteredWord = data.en.trim().toLowerCase();
        }
        return filteredWord && filteredWord.startsWith(searchTerm)
      })
      setFilter(resultArray)
  }

  const SuggestionItem = (filteredWord) => {
      let item;
      if(language==="ru"){
        item = filteredWord.value.item.ru
      } else if(language==="kz"){
        item =  filteredWord.value.item.kz
      } else if(language==="en"){
        item =  filteredWord.value.item.en
      }
      return (
      <TouchableOpacity onPress={()=>pressSuggestionHandler(item)}>
          <Text style={styles.filteredResult}>{item}</Text>
      </TouchableOpacity>
    )
    }



  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          autoCorrect={false}
          autoCapitalize="none"
          placeholder={placeholder}
          onChangeText={(text)=>changeHandler(text)}
          value={value}
          style={styles.input}
          keyboardType="default"
        ></TextInput>
        <AppButton
          buttonWidth={20}
          backgroundColor={constats.MAIN_COLOR}
          onPress={pressHandler}
        >
          <AntDesign name="search1" color="white" size={20} />
        </AppButton>
      </View>
      {filteredWord && value && (
        <View style={styles.listContainer}>
            <FlatList
          data={filteredWord}
          renderItem={(item)=>{
            return (<SuggestionItem value={item}/>)
          }}
        />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  filteredResult:{
    marginLeft: 10,
    marginVertical: 2,
    fontSize: 18,
    lineHeight: 28,
    
  },
  listContainer:{
    marginTop: 5,
    backgroundColor: "white",
    width: "100%",
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    borderWidth: 0.4,
    borderColor: "#D5D5D5",
    borderTopColor: "white",
    maxHeight: Dimensions.get("window").height - 450,
    position:"relative",
    // top: 42,
    zIndex: 100

  }, 
  container: {
    alignItems: "center",
    width: "100%"
  },
  searchBar: {
    borderRadius: 4,
    alignItems: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f0f0f0",
    shadowColor: "#000",
    shadowRadius: 2,
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 2 },

    elevation: 7,
  },
  input: {
    flex: 1,
    marginHorizontal: 10,

    height: 25,
    fontSize: 18,
  },
});
