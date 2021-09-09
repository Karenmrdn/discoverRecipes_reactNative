import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  View,
} from "react-native";

const CategoryGridTile = (props) => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }

  return (
    <View style={styles.gridItem}>
      <TouchableComponent onPress={props.onPress} style={{ flex: 1 }}>
        <View style={[styles.textContainer, { backgroundColor: props.color }]}>
          <Text style={styles.categoryText}>{props.title}</Text>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 6,
    height: 80,
    borderRadius: 8,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    elevation: 6,
  }, 
  textContainer: {
    flex: 1,
    borderRadius: 8,
    justifyContent: "center",
  },
  categoryText: {
    fontFamily: "open-sans-bold",
    textAlign: "center",
  },
});

export default CategoryGridTile;
