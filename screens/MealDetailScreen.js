import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  Image,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import BodyText from "../components/BodyText";
import { colors } from "../constants/colors";

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <BodyText>{props.children}</BodyText>
    </View>
  );
};

const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

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
  const mealId = navigationData.navigation.getParam("mealId");

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => console.log("Fav press")}
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
    // backgroundColor: "rgba(0,0,0,0.1)",
    borderBottomWidth: 1,
    borderColor: colors.primary,
    marginBottom: 8,
  },
  detailText: {
    fontFamily: "open-sans-bold",
    color: colors.secondary,
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
