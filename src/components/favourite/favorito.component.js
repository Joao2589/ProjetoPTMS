import React, { useContext } from "react";
import { Pressable } from "react-native";
import { FavoritosContext } from "../../service/favourites/favoritos.context";
import Ionicons from "react-native-vector-icons/Ionicons";

export const Favourite = ({ restaurant }) => {
  const { favoritos, addToFavourites, removeFromFavourites } =
    useContext(FavoritosContext);

  const isFavourite = favoritos.find((r) => r.placeId === restaurant.placeId);
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
