import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { colors } from "../constants/colors";
import BodyText from "./BodyText";

const MealItem = (props) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onPress}>
        <View>
          <View style={[styles.mealRow, styles.mealHeader]}>
            <ImageBackground
              source={{ uri: props.imageUrl }}
              style={styles.bgImage}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {props.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={[styles.mealRow, styles.mealDetail]}>
            <BodyText style={styles.detailText}>{props.duration}min</BodyText>
            <BodyText style={styles.detailText}>
              {props.complexity.toUpperCase()}
            </BodyText>
            <BodyText style={styles.detailText}>
              {props.affordability.toUpperCase()}
            </BodyText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    borderWidth: 1,
    borderColor: colors.primary,
    marginVertical: 4,
    borderRadius: 8,
    overflow: "hidden",
  },
  mealRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mealHeader: {
    height: "85%",
  },
  mealDetail: {
    paddingHorizontal: 12,
    height: "15%",
    alignItems: "center",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.4)",
    paddingVertical: 2,
    paddingHorizontal: 8,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  detailText: {
    fontFamily: "open-sans-bold",
  },
});

export default MealItem;
