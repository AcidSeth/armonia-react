import React from "react";
import axios from "axios";
import create from "zustand";

const BASE_URL = "https://62c96230d9ead251e8baf02e.mockapi.io/campus"

const store = (set) => ({
  users: [],
  loading: true,
  fetchUsers: async () => {
    const response = await fetch(BASE_URL + "/users");
    set({ users: await response.json(), loading: false });
  },
  removeUser: (id) =>
    set((state) => ({
      users: state.users.filter((user) => user.id !== id),
    })),
});



export const useStore = create(store)