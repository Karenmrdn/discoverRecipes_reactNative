import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

const renderCategories = (itemData) => {
  return (
    <View>
      <Text></Text>
    </View>
  );
};

const CategoriesScreen = (props) => {
  return <FlatList data={CATEGORIES} render={renderCategories} />;
};

const styles = StyleSheet.create({});

export default CategoriesScreen;
