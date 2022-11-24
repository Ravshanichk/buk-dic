import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

import { EngScreen } from "../screens/EngScreen";
import constats from "../constats";
import { RuScreen } from "../screens/RuScreen";
import { KzScreen } from "../screens/KzScreen";
import { TabIcon } from "../components/ui/TabIcon";

const Tab = createBottomTabNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
    text: "black"
  },
};

export const MyNavigation = ({}) => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
      
      screenOptions={{
        tabBarStyle:{
          backgroundColor: constats.MAIN_COLOR,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        },
        tabBarLabelStyle: {
           fontFamily: "roboto-bold",
          fontSize: 19,
          marginStart: 0,
          paddingStart: 0,
          marginBottom: 7,
        },
        tabBarLabelPosition: "beside-icon",
        tabBarIconStyle: { display: "none" },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#B9B9B9",
        headerTitleStyle: {
          fontFamily: "roboto-bold",
          color: "white",
          marginBottom: 7,
        },
        headerTitleAlign: "center",
        headerStyle: {
          height: 70,
          backgroundColor: constats.MAIN_COLOR,
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
        }
      }}
      initialRouteName="Русский"
      >
        <Tab.Screen
          name="Русский"
          component={RuScreen}
        />
        <Tab.Screen
          name="Қазақ"
          component={KzScreen}
          
        />
         <Tab.Screen
          name="English"
          component={EngScreen}
          
        />
      </Tab.Navigator>
    </NavigationContainer>

  );
};
