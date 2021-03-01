import React, { useState } from "react";
import { THEMES, getTheme } from "./themes/index";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./themes/global";
import Layout from "./layout/Layout";
import Router from "./router/Router";
import ThemesContext from "./context/ThemesContext";
import NavBar from "./components/common/navbar/NavBar";
import { SideNavProvider } from "./context/SideNavContext";
import { AppPropertiesProvider } from "./context/ApplicationProprtiesContext";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [{ theme, themeName }, setTheme] = useState({
    theme: getTheme(THEMES.BASIC),
    themeName: THEMES.BASIC,
  });
  const toggleTheme = ({ themeName, theme }) => {
    console.log(theme);
    setTheme({ theme: getTheme(THEMES[themeName]), themeName: themeName });
  };

  return (
    <ThemesContext.Provider
      value={{ toggleTheme: toggleTheme, themeName: themeName }}
    >
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppPropertiesProvider>
          <SideNavProvider>
            <ToastContainer />
            <main className="wrapper">
              <NavBar />
              <Layout>
                <Router />
              </Layout>
            </main>
          </SideNavProvider>
        </AppPropertiesProvider>
      </ThemeProvider>
    </ThemesContext.Provider>
  );
}

export default App;
