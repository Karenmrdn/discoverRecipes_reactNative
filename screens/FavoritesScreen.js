import React from "react";
import { View, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";
import BodyText from "../components/BodyText";

const FavoritesScreen = (props) => {
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);

  if (favoriteMeals.length === 0 || !favoriteMeals) {
    return (
      <View style={styles.noFavoritesBlock}>
        <BodyText style={styles.noFavoritesText}>
          You have no favorites yet.{"\n"}But you can always add them!
        </BodyText>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <MealList data={favoriteMeals} navigation={props.navigation} />
    </View>
  );
};

FavoritesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Favorites",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    margin: 16,
    marginBottom: 0,
  },
  noFavoritesBlock: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 16,
  },
  noFavoritesText: {
    fontFamily: "open-sans-bold",
    textAlign: "center",
  },
});

export default FavoritesScreen;
