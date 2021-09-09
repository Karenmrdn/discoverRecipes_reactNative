import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Platform,
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = (props) => {
  const renderCategories = (itemData) => {
    return (
      <CategoryGridTile
        onPress={() => {
          props.navigation.navigate("CategoryMeals", {
            categoryId: itemData.item.id,
          });
        }}
        title={itemData.item.title}
        color={itemData.item.color}
      />
    );
  };

  return (
    <View style={styles.categoriesContainer}>
      <FlatList
        data={CATEGORIES}
        renderItem={renderCategories}
        numColumns={2}
      />
    </View>
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories",
};

const styles = StyleSheet.create({
  categoriesContainer: {
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
});

export default CategoriesScreen;
