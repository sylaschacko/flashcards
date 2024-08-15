"use client";
import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  // const [flashcards, setFlashcards] = useState(() => {
  //   // Load flashcards from localStorage when the component mounts
  //   const storedFlashcards = localStorage.getItem("flashcards");
  //   return storedFlashcards ? JSON.parse(storedFlashcards) : {};
  // });

  // // Whenever flashcards change, save them to localStorage
  // useEffect(() => {
  //   localStorage.setItem("flashcards", JSON.stringify(flashcards));
  // }, [flashcards]);
  const [flashcards, setFlashcards] = useState(() => {
    // Check if we are in the browser environment
    if (typeof window !== "undefined") {
      const storedFlashcards = localStorage.getItem("flashcards");
      return storedFlashcards ? JSON.parse(storedFlashcards) : {};
    }
    return {}; // Default initial value if server-side
  });

  useEffect(() => {
    // Only run this effect if we are in the browser
    if (typeof window !== "undefined") {
      localStorage.setItem("flashcards", JSON.stringify(flashcards));
    }
  }, [flashcards]);

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
