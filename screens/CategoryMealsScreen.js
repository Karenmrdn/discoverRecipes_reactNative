import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { CATEGORIES, MEALS } from "../data/dummy-data";

const renderFilteredMeals = (itemData) => {
  return <Text>{itemData.item.title}</Text>;
};

const CategoryMealsScreen = (props) => {
  const categoryId = props.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find(
    (category) => category.id === categoryId
  );

  const mealsToDisplay = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  return <FlatList data={mealsToDisplay} renderItem={renderFilteredMeals} />;
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find(
    (category) => category.id === categoryId
  );

  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
