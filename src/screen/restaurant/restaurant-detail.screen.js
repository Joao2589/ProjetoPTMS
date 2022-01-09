import React, { useState } from "react";
import { ScrollView } from "react-native";
import { RestaurantInfoCard } from "../../components/restaurants/restaurant-info-card.component";
import { List } from "react-native-paper";

export const RestaurantDetailScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const { restaurant } = route.params;
  return (
    <>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <List.Accordion
          title="Café da Manhã"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Ovos Mexido" />
          <List.Item title="Outros" />
        </List.Accordion>

        <List.Accordion
          title="Almoço"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="PF" />
          <List.Item title="Lasanha" />
          <List.Item title="Strogonoff de Carne " />
        </List.Accordion>

        <List.Accordion
          title="Jantar"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Omelete" />
          <List.Item title="Bolinho de Arroz" />
          <List.Item title="Sopa" />
        </List.Accordion>

        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Café" />
          <List.Item title="Vodka" />
          <List.Item title="Chá" />
          <List.Item title="Refrigerante" />
          <List.Item title="Suco" />
        </List.Accordion>
      </ScrollView>
    </>
  );
};
