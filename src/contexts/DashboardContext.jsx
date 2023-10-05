"use client"
// AppContext.js
import React, { createContext, useContext, useReducer } from 'react';

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

const initialState = {
  selected: null,
  topicValue: '',
  generatedText: '',
  errorMessage: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SELECT':
      return { ...state, selected: action.payload };
    case 'SET_TOPIC':
      return { ...state, topicValue: action.payload };
    case 'SET_GENERATED_TEXT':
      return { ...state, generatedText: action.payload };
    case 'SET_ERROR_MESSAGE':
      return { ...state, errorMessage: action.payload };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
