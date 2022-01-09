import React from "react";
import { Pressable, ScrollView, StyleSheet, View, Text } from "react-native";
import { CompactRestaurantInfo } from "../../components/map/compact-restaurant-info.component";

export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <View>
      <View>
        <Text>Favoritos</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <View key={key}>
              <Pressable
                onPress={() =>
                  onNavigate("RestaurantDetail", {
                    restaurant,
                  })
                }
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </Pressable>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
