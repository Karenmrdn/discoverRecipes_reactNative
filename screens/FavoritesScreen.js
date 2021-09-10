import React from "react";
import { View, StyleSheet } from "react-native";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = (props) => {
  const mealsToDisplay = MEALS.filter(
    (meal) => meal.id === "m1" || meal.id === "m2"
  );

  return (
    <View style={styles.screen}>
      <MealList data={mealsToDisplay} navigation={props.navigation} />
    </View>
  );
};

FavoritesScreen.navigationOptions = {
  headerTitle: "Your Favorites",
};

const styles = StyleSheet.create({
  screen: {
    margin: 16,
    marginBottom: 0,
  },
});

export default FavoritesScreen;
