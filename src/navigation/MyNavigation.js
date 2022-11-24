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
        tabBarLabelStyle: {
           fontFamily: "roboto-regular",
          fontSize: 15,
          marginBottom: 7,
        },
        headerTitleStyle: {
          marginHorizontal: 13,
        },
        tabBarLabelPosition: "beside-icon",
        tabBarIconStyle: { display: "none" },
      }}
      initialRouteName="Русский">
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
          options={{
            tabBarIcon: ({}) => {
              return <AntDesign name="infocirlce" size={24} color={constats.MAIN_COLOR} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>

  );
};
