import { createSlice } from "@reduxjs/toolkit";
import { RocketCardProps } from "../../type";

export type rocketsState = {
  rockets: RocketCardProps[];
  filteredRockets: RocketCardProps[];
};
export interface RocketsState {
  rockets: rocketsState;
  filteredRockets: rocketsState;
}

export const initialState = {
  rockets: [],
  filteredRockets: [],
};

const rockets = createSlice({
  name: "rockets",
  initialState,
  reducers: {
    storeRockets: (state, action) => {
      state.rockets = action.payload;
    },
    storeFilteredRockets: (state, action) => {
      state.filteredRockets = action.payload;
    },
  },
});

export default rockets.reducer;
export const { storeRockets, storeFilteredRockets } = rockets.actions;
