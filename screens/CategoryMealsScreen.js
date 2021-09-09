import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import MealItem from "../components/MealItem";
import { CATEGORIES, MEALS } from "../data/dummy-data";

const CategoryMealsScreen = (props) => {
  const renderFilteredMeals = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        imageUrl={itemData.item.imageUrl}
        onPress={() =>
          props.navigation.navigate("MealDetail", {
            mealId: itemData.item.id,
          })
        }
      />
    );
  };

  const categoryId = props.navigation.getParam("categoryId");

  const mealsToDisplay = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  return (
    <FlatList
      data={mealsToDisplay}
      renderItem={renderFilteredMeals}
      style={styles.list}
    />
  );
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
  list: {
    margin: 16,
  },
});

export default CategoryMealsScreen;
