import { configureStore } from "@reduxjs/toolkit";
import NotesSlice from "./notes/NoteSlice";

export default configureStore({
  reducer: { notes: NotesSlice },
});
