import { createSlice } from "@reduxjs/toolkit";

const getInitialToDoList = () => {
  const toDoList = window.localStorage.getItem("toDoList");
  if (toDoList) {
    return JSON.parse(toDoList);
  }
  window.localStorage.setItem("toDoList", []);
  return [];
};

const initialValue = {
  toDoList: getInitialToDoList(),
};

export const toDoSlice = createSlice({
  name: "toDo",
  initialState: initialValue,
  reducers: {
    addToDo: (state, action) => {
      state.toDoList.push(action.payload);
      const toDoList = window.localStorage.getItem("toDoList");
      if (toDoList) {
        const toDoListArray = JSON.parse(toDoList);
        toDoListArray.push({ ...action.payload });
        window.localStorage.setItem("toDoList", JSON.stringify(toDoListArray));
      } else {
        window.localStorage.setItem(
          "toDoList",
          JSON.stringify([{ ...action.payload }])
        );
      }
    },
  },
});

export const { addToDo } = toDoSlice.actions;
export default toDoSlice.reducer;
