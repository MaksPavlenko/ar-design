import React from 'react';

// Our global theme context with default values
export const ThemeContext = React.createContext({
  showFixed: false,
  setShowFixed: () => {},
  portfolioSlide: 0,
  setPortfolioSlide: () => {},
});

// Theme provider component with state
const ThemeProvider = (props) => {
  const [portfolioSlide, setPortfolioSlide] = React.useState(0);
  const [showFixed, setShowFixed] = React.useState(false);

  const value = {
    portfolioSlide,
    setPortfolioSlide,
    showFixed,
    setShowFixed,
  };

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
};

const wrapperThemeProvider = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);

export default wrapperThemeProvider;
