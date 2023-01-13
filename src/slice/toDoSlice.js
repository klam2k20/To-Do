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

// createSlice generates action creators and action types that
// correspond to the reducers and state
export const toDoSlice = createSlice({
  name: "toDo",
  initialState: initialValue,
  reducers: {
    addToDo: (state, action) => {
      // createSlice uses a library called Immer inside it. Immer uses
      // a special JS tool called Proxy to let you write code that mutates
      // the state. Under the hood Immer tracks all the changes you've made
      // and returns a safely immutably updated value
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

// createSlice returns an action creator with a type of toDo/addToDo
// when dispatch is called with this action creator it will be directed
// to the redux store were it will run the reducer with the type.
// Think of the toDoSlicer.reducer as a big reducer that runs
// the specific reducer in the reducer {...} depending on the
// action type
export const { addToDo } = toDoSlice.actions;
export default toDoSlice.reducer;
