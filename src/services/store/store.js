import React from "react";
import create from "zustand";

const store = (set) => ({
  users: [],
  loading: true,
  // fetchUsers: async () => {
  //   const response = await fetch(BASE_URL + "/users");
  //   set({ users: await response.json(), loading: false });
  // },
  // removeUser: (id) =>
  //   set((state) => ({
  //     users: state.users.filter((user) => user.id !== id),
  //   })),
});



export const useStore = create(store)