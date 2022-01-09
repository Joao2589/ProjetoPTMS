import React from "react";
import { Text, View } from "react-native";
import WebView from "react-native-webview";

export const CompactRestaurantInfo = ({ restaurant }) => {
  return (
    <View>
      <WebView source={{ uri: restaurant.photos[0] }} />
      <Text numberOfLines={3}>{restaurant.name}</Text>
    </View>
  );
};
