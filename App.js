import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { RestaurantsContextProvider } from "./src/service/restaurants/restaurantes.context";
import { LocationContextProvider } from "./src/service/location/location.context";
import { FavouritesContextProvider } from "./src/service/favourites/favourites.context";
import { Navigation } from "./src/navigation/index";

export default function App() {
  return (
    <>
      <FavouritesContextProvider>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <Navigation />
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </FavouritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  SafeArea: {
    flex: 1,
    backgroundColor: "#F1F6F7",
  },
});
