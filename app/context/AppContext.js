"use client";
import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [flashcards, setFlashcards] = useState({});

  return (
    <AppContext.Provider
      value={{
        flashcards,
        setFlashcards,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const AppAuth = () => useContext(AppContext);
