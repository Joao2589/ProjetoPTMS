import React, { useContext, useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { LocationContext } from "../../service/location/location.context";

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <View style={styles.pesquisa}>
      <Searchbar
        placeholder="Pesquise por uma Localização"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pesquisa: {
    padding: 16,
    position: "absolute",
    zIndex: 999,
    width: "100%",
  },
});
