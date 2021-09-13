import React, { useEffect, useCallback } from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";
import BodyText from "../components/BodyText";
import CustomHeaderButton from "../components/HeaderButton";
import { colors } from "../constants/colors";
import { toggleFavorite } from "../store/actions/mealActions";

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <BodyText>{props.children}</BodyText>
    </View>
  );
};

const MealDetailScreen = (props) => {
  const dispatch = useDispatch();
  const meals = useSelector((state) => state.meals.meals);
  const mealId = props.navigation.getParam("mealId");
  const selectedMeal = meals.find((meal) => meal.id === mealId);
  const currentMealIsFavorite = useSelector((state) =>
    state.meals.favoriteMeals.some((meal) => meal.id === mealId)
  );

  useEffect(() => {
    props.navigation.setParams({ isFavorite: currentMealIsFavorite });
  }, [currentMealIsFavorite]);

  const toggleFavoriteHandler = useCallback(
    () => dispatch(toggleFavorite(mealId)),
    [dispatch, toggleFavorite, mealId]
  );

  useEffect(() => {
    props.navigation.setParams({
      toggleFavorite: toggleFavoriteHandler,
    });
  }, [toggleFavoriteHandler]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <BodyText style={styles.detailText}>
          {selectedMeal.duration}min
        </BodyText>
        <BodyText style={styles.detailText}>
          {selectedMeal.complexity.toUpperCase()}
        </BodyText>
        <BodyText style={styles.detailText}>
          {selectedMeal.affordability.toUpperCase()}
        </BodyText>
      </View>
      <View style={styles.list}>
        <BodyText style={styles.title}>Ingredients</BodyText>
        {selectedMeal.ingredients.map((item) => (
          <ListItem key={Math.random() + Date.now()}>{item}</ListItem>
        ))}
      </View>
      <View style={styles.list}>
        <BodyText style={styles.title}>Steps</BodyText>
        {selectedMeal.steps.map((item, index) => (
          <ListItem key={Math.random() + Date.now()}>
            {index + 1}. {item}
          </ListItem>
        ))}
      </View>
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealTitle = navigationData.navigation.getParam("mealTitle");
  const toggleFavorite = navigationData.navigation.getParam("toggleFavorite");
  const isFavorite = navigationData.navigation.getParam("isFavorite");

  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorite"
          iconName={isFavorite ? "ios-star" : "ios-star-outline"}
          onPress={toggleFavorite}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: "100%",
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 4,
    borderBottomWidth: 1,
    borderColor: colors.primary,
    marginBottom: 8,
  },
  detailText: {
    fontFamily: "open-sans-bold",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    textAlign: "center",
    color: colors.primary,
  },
  listItem: {
    marginVertical: 2,
    marginHorizontal: 16,
    padding: 4,
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 8,
  },
  list: {
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 8,
    marginVertical: 8,
    marginHorizontal: 24,
  },
});

export default MealDetailScreen;
