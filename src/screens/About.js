import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";

export default function About() {
  return (
    <SafeAreaView>
      <View style={styles.content}>
        <Text style={styles.text}>Цифровой словарь составлен на основе: </Text>
        <View style={styles.dic1}>
          <Text style={styles.text}>
            <Text style={styles.dic1}>"Казахско-русско- английский, русско-казахско- английский,
            англо-русско-казахский словарь общей лексики."</Text> и <Text style={styles.dic1}>"Казахско-русско- английский, русско-казахско- английский,
            англо-русско-казахский словарь юридических терминов и понятий."</Text>
          </Text>
        </View>
        <View style={styles.creators}>
          <Text style={styles.text}>
            Составители: д.ф.н., профессор Ш.Ш.Жалмаханов, д.ф.н. Г.И.Байгунисова, магистр филологии Н.П.Жданович.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 15,
    width: "100%",
  
  },
  text: {
    fontFamily: "roboto-regular",
    fontSize: 17,
  },
  creators: {
    marginTop: 5,
    width: "100%",
  },
  dic1:{
    fontStyle: "italic",
    fontFamily: "roboto-bold",
    fontWeight: "700"
  }
});
