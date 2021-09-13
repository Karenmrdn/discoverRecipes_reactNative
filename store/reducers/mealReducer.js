import { MEALS } from "../../data/dummy-data";
import { SET_FILTERS, TOGGLE_FAVORITE } from "../actions/mealActions";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      );

      let updatedFavMeals;
      if (existingIndex >= 0) {
        updatedFavMeals = state.favoriteMeals.filter(
          (meal) => meal.id !== action.mealId
        );
      } else {
        const newFavoriteMeal = state.meals.find(
          (meal) => meal.id === action.mealId
        );
        updatedFavMeals = [...state.favoriteMeals, newFavoriteMeal];
      }
      return { ...state, favoriteMeals: updatedFavMeals };

    case SET_FILTERS:
      const filters = action.filters;
      const updatedFilteredMeals = state.meals.filter((meal) => {
        if (filters.isGlutenFree && !meal.isGlutenFree) {
          return false;
        } else if (filters.isLactoseFree && !meal.isLactoseFree) {
          return false;
        } else if (filters.isVegetarian && !meal.isVegetarian) {
          return false;
        } else if (filters.isVegan && !meal.isVegan) {
          return false;
        }
        return true;
      });
      return { ...state, filteredMeals: updatedFilteredMeals };

    default:
      return state;
  }
};

export default mealReducer;
