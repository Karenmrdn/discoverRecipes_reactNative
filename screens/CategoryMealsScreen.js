import React from "react";
import { StyleSheet, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import { useSelector } from "react-redux";
import MealList from "../components/MealList";
import BodyText from "../components/BodyText";

const CategoryMealsScreen = (props) => {
  const filteredMeals = useSelector((state) => state.meals.filteredMeals);

  const categoryId = props.navigation.getParam("categoryId");

  const mealsToDisplay = filteredMeals?.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  if (mealsToDisplay.length === 0) {
    return (
      <View style={styles.noMealsBlock}>
        <BodyText style={styles.noMealsText}>
          No meals found for chosen filters.
        </BodyText>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <MealList data={mealsToDisplay} navigation={props.navigation} />
    </View>
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
  screen: {
    margin: 16,
    marginBottom: 0,
  },
  noMealsBlock: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 16,
  },
  noMealsText: {
    fontFamily: "open-sans-bold",
    textAlign: "center",
  },
});

export default CategoryMealsScreen;
