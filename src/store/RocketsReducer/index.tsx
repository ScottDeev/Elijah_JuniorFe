import { createSlice } from "@reduxjs/toolkit";
import { RocketCardProps } from "../../type";

export type rocketsState = {
  rockets: RocketCardProps[];
  filteredRockets: RocketCardProps[];
  loading: boolean;
};
export interface RocketsState {
  rockets: rocketsState;
  filteredRockets: rocketsState;
  loading: boolean;
}

export const initialState = {
  rockets: [],
  filteredRockets: [],
  loading: false,
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
    setLoadingState: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export default rockets.reducer;
export const { storeRockets, storeFilteredRockets, setLoadingState } =
  rockets.actions;
