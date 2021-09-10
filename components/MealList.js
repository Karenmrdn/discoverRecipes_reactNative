import React from "react";
import { FlatList } from "react-native";
import MealItem from "./MealItem";

const MealList = (props) => {
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

  return (
    <FlatList
      data={props.data}
      renderItem={renderFilteredMeals}
      style={props.style}
    />
  );
};

export default MealList;
