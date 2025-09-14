"use client";

import { createContext, useContext, useState, useEffect } from "react";

interface ClassContextType {
  selectedClass: number;
  setSelectedClass: (cls: number) => void;
}

const ClassContext = createContext<ClassContextType>({
  selectedClass: 6,
  setSelectedClass: () => {},
});

export const ClassProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedClass, setSelectedClassState] = useState(6);

  // On mount, read from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("selectedClass");
    if (stored) setSelectedClassState(Number(stored));
  }, []);

  const setSelectedClass = (cls: number) => {
    setSelectedClassState(cls);
    localStorage.setItem("selectedClass", cls.toString());
  };

  return (
    <ClassContext.Provider value={{ selectedClass, setSelectedClass }}>
      {children}
    </ClassContext.Provider>
  );
};

export const useClass = () => useContext(ClassContext);
