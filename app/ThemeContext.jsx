import React, { createContext, useContext, useMemo, useState } from 'react';
import { useColorScheme } from 'react-native';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const systemColorScheme = useColorScheme();
  const [theme, setTheme] = useState(systemColorScheme);

  const isDarkMode = theme === 'dark';

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const themeColors = useMemo(
    () => ({
      colors: {
        background: isDarkMode ? '#000' : '#fff',
        text: isDarkMode ? '#fff' : '#000',
        primary: isDarkMode ? '#bb86fc' : '#6200ee',
        card: isDarkMode ? '#1c1c1c' : '#f5f5f5',
      },
      isDarkMode,
    }),
    [isDarkMode]
  );

  return (
    <ThemeContext.Provider value={{ ...themeColors, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
