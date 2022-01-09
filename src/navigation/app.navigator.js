import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../screen/map/map.screen";
import { Text } from "react-native";

const Tab = createBottomTabNavigator();
const Configuração = () => <Text>Configuração</Text>;
const Pedidos = () => <Text>Pedidos</Text>;

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Restaurantes") {
              iconName = "md-home";
            } else if (route.name === "Mapa") {
              iconName = "md-map";
            } else if (route.name === "Configuração") {
              iconName = "md-settings";
            } else if (route.name === "Pedidos") {
              iconName = "md-fast-food";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Restaurantes" component={RestaurantsNavigator} />
        <Tab.Screen name="Mapa" component={MapScreen} />
        <Tab.Screen name="Pedidos" component={Pedidos} />
        <Tab.Screen name="Configuração" component={Configuração} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
