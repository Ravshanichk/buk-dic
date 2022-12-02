import React, {useEffect, useState } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { MyNavigation } from "./src/navigation/MyNavigation";
import * as Font from "expo-font";
import constats from "./src/constats";

SplashScreen.preventAutoHideAsync();
const STYLES = ['default', 'dark-content', 'light-content'];

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
  
  

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
          "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
        });
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        // await new Promise(resolve => setTimeout(resolve, 10000))
        // console.log("Hui")
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
        SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  // const onLayoutRootView = useCallback(async () => {
  //   if (appIsReady) {
  //     // This tells the splash screen to hide immediately! If we call this after
  //     // `setAppIsReady`, then we may see a blank screen while the app is
  //     // loading its initial state and rendering its first pixels. So instead,
  //     // we hide the splash screen once we know the root view has already
  //     // performed layout.
  //     await 
  //   }
  // }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={styles.content}>
       <StatusBar
        animated={true}
        backgroundColor={constats.MAIN_COLOR}
        barStyle={statusBarStyle} />
        <MyNavigation ></MyNavigation>
    </View>
      
  );
}


const styles = StyleSheet.create({
  content:{
    flex:1
  }
})