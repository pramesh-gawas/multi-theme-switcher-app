import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import { themes } from "../themes/index";
import { ThemeName, ThemeStyles } from "../types/theme";
interface ThemeContextType {
  currentThemeName: ThemeName;
  currentTheme: ThemeStyles;
  setTheme: (name: ThemeName) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentThemeName, setCurrentThemeName] = useState<ThemeName>(() => {
    const savedTheme = localStorage.getItem("appTheme") as ThemeName;
    return savedTheme && themes[savedTheme] ? savedTheme : "theme1";
  });

  const currentTheme = themes[currentThemeName];

  useEffect(() => {
    localStorage.setItem("appTheme", currentThemeName);
  }, [currentThemeName]);

  const setTheme = (name: ThemeName) => {
    setCurrentThemeName(name);
  };

  return (
    <ThemeContext.Provider value={{ currentThemeName, currentTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
