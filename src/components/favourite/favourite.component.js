import React, { useContext } from "react";
import { Pressable } from "react-native";
import { FavouritesContext } from "../../service/favourites/favourites.context";
import Ionicons from "react-native-vector-icons/Ionicons";

export const Favourite = ({ restaurant }) => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);

  const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId);
  return (
    <>
      <Pressable
        onPress={() => {
          !isFavourite
            ? addToFavourites(restaurant)
            : removeFromFavourites(restaurant);
        }}
      >
        <Ionicons
          name="heart"
          size={24}
          color={isFavourite ? "tomato" : "grey"}
        />
      </Pressable>
    </>
  );
};
