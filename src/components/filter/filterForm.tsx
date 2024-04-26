import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  RocketsState,
  setLoadingState,
  storeFilteredRockets,
} from "../../store/RocketsReducer";
import { RocketCardProps } from "../../type";

export default function FilterForm() {
  const dispatch = useDispatch();
  const { rockets } = useSelector((state: RocketsState) => state.rockets);

  interface Filters {
    active: string;
    country: string;
    boosters: number | string;
  }
  const [filters, setFilters] = useState<Filters>({
    active: "",
    country: "",
    boosters: "",
  });

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Function to filter data based on form inputs
    const filteredRockets = function filterData() {
      return rockets.filter((rocket: RocketCardProps) => {
        // Check if each item satisfies all filter conditions
        // if (filters.boosters == rocket.boosters) return true;
        // if (rocket.active === filters.active) return true;
        // if (rocket.country.includes(filters.country)) return true;
        // return Object.keys(filters).every((key) => {
        //   if (filters[key] === "") return true;

        //   return key === "active"
        //     ? rocket[key] == (filters[key] === "active")
        //     : rocket[key] == filters[key];
        // });
        const { active, boosters, country } = filters;

        return (
          (active === "" || rocket.active == (active === "active")) &&
          (boosters == "" || rocket.boosters == boosters) &&
          (country === "" || rocket.country == country)
        );
      });
    };

    console.log(filteredRockets(), filters);
    const data = filteredRockets();

    // This help gives a little loading feel
    dispatch(setLoadingState(true));
    setTimeout(() => {
      dispatch(storeFilteredRockets(data));
      dispatch(setLoadingState(false));
    }, 2000);
  };

  const handleInputChange = (e: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = e.target;
    console.log(value);
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      <div className="mb-4">
        <label
          htmlFor="active"
          className="block text-sm font-medium text-gray-700"
        >
          Status of Rocket
        </label>
        <select
          id="active"
          name="active"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          value={filters.active}
          onChange={handleInputChange}
        >
          <option value=""></option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="country"
          className="block text-sm font-medium text-gray-700"
        >
          Country of Launch
        </label>
        <select
          id="country"
          name="country"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          value={filters.country}
          onChange={handleInputChange}
        >
          <option value=""></option>
          <option value="Republic of the Marshall Islands">
            Republic of the Marshall Islands
          </option>
          <option value="United States">United States</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="boosters"
          className="block text-sm font-medium text-gray-700"
        >
          Number of Boosters Used
        </label>
        <input
          id="boosters"
          name="boosters"
          type="number"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          value={filters.boosters}
          onChange={handleInputChange}
        />
      </div>
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Filter
      </button>
    </form>
  );
}
