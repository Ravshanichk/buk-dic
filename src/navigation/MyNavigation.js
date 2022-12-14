import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { EngScreen } from "../screens/EngScreen";
import constats from "../constats";
import { RuScreen } from "../screens/RuScreen";
import { KzScreen } from "../screens/KzScreen";
import About from "../screens/About";
import { AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
    text: "black",
  },
};

export const MyNavigation = ({}) => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: constats.MAIN_COLOR,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
          tabBarLabelStyle: {
            fontFamily: "roboto-regular",
            fontSize: 19,
            marginStart: 0,
            paddingStart: 0,
            marginBottom: 7,
          },
          tabBarLabelPosition: "beside-icon",
          tabBarIconStyle: {
            marginBottom: 4
          },
          
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "#B9B9B9",
          headerTitleStyle: {
            fontFamily: "roboto-regular",
            color: "white",
            // marginBottom: Dimensions.get('window').height<=2340?7:7,
          },
          headerTitleAlign: "center",
          headerStyle: {
            // height: Dimensions.get('window').height<=2340?80:70,
            backgroundColor: constats.MAIN_COLOR,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          },
        }}
        initialRouteName="Русский"
      >
        <Tab.Screen
          name="Русский"
          component={RuScreen}
          options={{
            tabBarLabel: "RU",
            tabBarIconStyle: {
              display: "none",
            },
          }}
        />
        <Tab.Screen
          name="Қазақ"
          component={KzScreen}
          options={{
            tabBarLabel: "KZ",
            tabBarIconStyle: {
              display: "none",
            },
          }}
        />
        <Tab.Screen
          name="English"
          component={EngScreen}
          options={{
            tabBarLabel: "EN",
            tabBarIconStyle: {
              display: "none",
            },
          }}
        />
        <Tab.Screen
          name="Справка"
          component={About}
          options={{
            tabBarLabelStyle: {
              display: "none",
            },
            tabBarIcon: ({color})=>(
              <AntDesign color={color} name="infocirlceo" size={23}/>
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
