import React, { useContext, useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { LocationContext } from "../../service/location/location.context";
import { RestaurantsContext } from "../../service/restaurants/restaurantes.context";
import { Search } from "../../components/map/search.component";
import { MapCallout } from "../../components/map/map-callout.component";

export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);
  const [latDelta, setLatDelta] = useState(0);

  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <Search />
      <MapView
        style={styles.mapa}
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <MapView.Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <MapView.Callout
                onPress={() =>
                  navigation.navigate("RestaurantDetail", {
                    restaurant,
                  })
                }
              >
                <MapCallout restaurant={restaurant} />
              </MapView.Callout>
            </MapView.Marker>
          );
        })}
      </MapView>
    </>
  );
};

const styles = StyleSheet.create({
  mapa: {
    height: "100%",
    width: "100%",
  },
});
