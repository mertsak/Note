/* eslint-disable array-callback-return */
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const defaultItems = [
  {
    id: 0,
    title: "White Note",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste odio officiis reprehenderit asperiores.",
    color: "bg-light",
  },
  {
    id: 1,
    title: "Aqua Note",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste odio officiis reprehenderit asperiores.",
    color: "bg-clr1",
  },
  {
    id: 2,
    title: "Pink Note",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste odio officiis reprehenderit asperiores.",
    color: "bg-clr2",
  },
  {
    id: 3,
    title: "Yellow Note",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste odio officiis reprehenderit asperiores.",
    color: "bg-clr3",
  },
];
export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items:
      JSON.parse(window.localStorage.getItem("notes")) === null
        ? defaultItems
        : JSON.parse(window.localStorage.getItem("notes")),
    activeFilter: "",
    loading: false,
  },
  reducers: {
    addNote: (state, action) => {
      state.items.push(action.payload);
      toast.success("MY SUCCESS");
    },
    destroy: (state, action) => {
      const id = action.payload;
      const filtered = state.items.filter((item) => item.id !== id);
      state.items = filtered;
    },
    changeFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
    changeLoading: (state, action) => {
      state.loading = action.payload;
    },
    updateNote: (state, action) => {
      state.items.map((item) => {
        if (item.id === action.payload.id) {
          item.title = action.payload.title;
          item.text = action.payload.text;
        }
      });
    },
  },
});

export const { addNote, destroy, changeFilter, changeLoading, updateNote } =
  notesSlice.actions;
export default notesSlice.reducer;
