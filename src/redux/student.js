import { createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
    name: "students",
    initialState: {
      allStudents: [
        // {
        //   // email: "oyekunlevictoria2000@gmail.com",
        //   // firstname: "Oyekunle",
        //   // lastname: "Victoria",
        //   // password: "password",
        // },
      ],
      allCurrentUsers: {

      },
      allQuestions: [
        
      ]
    },
    reducers: {
      addStudent: (state, action) => {
        state.allStudents = [...state.allStudents, action.payload];
      },
      addCurrentUser: (state, action) => {
        state.allCurrentUsers = [...state.allCurrentUsers, action.payload];

      },
      addQuestions: (state, action) => {
        state.allQuestions = [...state.allQuestions, action.payload]
      }
    },
  });
  
  export const { addStudent, addCurrentUser, addQuestions } = studentSlice.actions;
  
  export default studentSlice.reducer;