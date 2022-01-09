import React, { useContext, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { RestaurantsContext } from "../../service/restaurants/restaurantes.context";
import { RestaurantInfoCard } from "../../components/restaurants/restaurant-info-card.component";
import { Search } from "../../components/restaurants/search.component";
import { FavouritesBar } from "../../components/favourite/favouriteBar.component";
import { FavouritesContext } from "../../service/favourites/favourites.context";

export const RestaurantScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <>
      <SafeAreaView style={styles.container}>
        {/* Carregando o ActivityIndicatorr */}
        {isLoading && (
          <View style={styles.carregando}>
            <ActivityIndicator size={"large"} animating={true} color={"blue"} />
          </View>
        )}

        {/* Componente de Pesquisa */}
        <Search
          isFavouritesToggled={isToggled}
          onFavouritesToggle={() => setIsToggled(!isToggled)}
        />
        {isToggled && (
          <FavouritesBar
            favourites={favourites}
            onNavigate={navigation.navigate}
          />
        )}

        {/* FlatList  */}
        <View style={styles.lista}>
          <FlatList
            data={restaurants}
            renderItem={({ item }) => {
              return (
                <Pressable
                  onPress={() =>
                    navigation.navigate("RestaurantDetail", {
                      restaurant: item,
                    })
                  }
                >
                  <RestaurantInfoCard restaurant={item} />
                </Pressable>
              );
            }}
            keyExtractor={(item) => item.name}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight,
    backgroundColor: "#F1F6F7",
  },

  lista: {
    flex: 1,
    padding: 16,
  },
  carregando: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginLeft: -25,
  },
});

