import React, { useState, useEffect, useCallback } from "react";
import { View, StyleSheet, Switch, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import BodyText from "../components/BodyText";
import CustomHeaderButton from "../components/HeaderButton";
import { colors } from "../constants/colors";

const FilterSwitch = (props) => {
  return (
    <View style={styles.filter}>
      <BodyText>{props.title}</BodyText>
      <Switch
        value={props.value}
        onValueChange={props.onValueChange}
        trackColor={{ true: colors.secondary, false: "#a7a7a7" }}
        thumbColor={Platform.OS === "android" ? colors.primary : ""}
      />
    </View>
  );
};

const FiltersScreen = (props) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const { navigation } = props;

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      isGlutenFree,
      isLactoseFree,
      isVegan,
      isVegetarian,
    };

    console.log(appliedFilters);
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <BodyText style={styles.title}>Available Filters / Restrictions</BodyText>
      <View style={styles.filterContainer}>
        <FilterSwitch
          title="Gluten-free"
          value={isGlutenFree}
          onValueChange={() => setIsGlutenFree((prev) => !prev)}
        />
        <FilterSwitch
          title="Lactose-free"
          value={isLactoseFree}
          onValueChange={() => setIsLactoseFree((prev) => !prev)}
        />
        <FilterSwitch
          title="Vegan"
          value={isVegan}
          onValueChange={() => setIsVegan((prev) => !prev)}
        />
        <FilterSwitch
          title="Vegetarian"
          value={isVegetarian}
          onValueChange={() => setIsVegetarian((prev) => !prev)}
        />
      </View>
    </View>
  );
};

FiltersScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Filter Meals",
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
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={navData.navigation.getParam("save")}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    margin: 16,
  },
  title: {
    fontSize: 20,
    fontFamily: "open-sans-bold",
    marginBottom: 16,
    color: colors.secondary,
    textAlign: "center",
  },
  filter: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 8,
  },
  filterContainer: {
    width: "70%",
    alignItems: "center",
    padding: 8,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 8,
  },
});

export default FiltersScreen;
