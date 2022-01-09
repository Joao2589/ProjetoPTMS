import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Card } from "react-native-paper";
import StarRating from "react-native-star-rating";
import { Favourite } from "../favourite/favourite.component";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://i0.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food.jpg",
    ],
    address = "Rua Tiradentes 103",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const [ratingStar, setRatingStar] = useState(rating);

  return (
    <>
      <Card style={styles.card}>
        {/* Imagem Cover */}
        <Card.Cover
          key={name}
          source={{
            uri: photos[0],
          }}
          style={styles.cardCover}
        />
        {/* Imagem Cover */}

        {/* Titulo, Endereço e Favorito */}
        <View>
          <Text style={styles.titulo}>{name}</Text>
          <View style={styles.containerStar}>
            <Text style={styles.endereco}>{address}</Text>
            <Favourite restaurant={restaurant}/>
          </View>
        </View>
        {/* Titulo, Endereço e Favorito */}

        {/* Estrelas e Aberto/Fechado */}
        <View style={styles.containerStar}>
          <StarRating
            starStyle={{
              padding: 5,
              marginLeft: 8,
            }}
            fullStarColor="#F3CB51"
            starSize={25}
            disable={false}
            maxStars={5}
            rating={ratingStar}
            selectedStar={(rating) => setRatingStar(rating)}
          />

          <View style={styles.isOpen}>
            {isOpenNow ? (
              <Text style={styles.titulo}>Aberto</Text>
            ) : (
              <Text>Fechado</Text>
            )}
          </View>
        </View>
        {/* Estrelas e Aberto/Fechado */}
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
    paddingBottom: 6,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
  },

  cardCover: {
    padding: 12,
    paddingBottom: 3,
    backgroundColor: "#FFFFFF",
  },

  containerStar: { flexDirection: "row", alignItems: "center" },

  isOpen: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: 14,
  },

  titulo: {
    marginLeft: 8,
    padding: 5,
    fontSize: 20,
    fontWeight: "bold",
  },
  endereco: {
    marginLeft: 8,
    padding: 5,
    fontSize: 13,
  },
});
