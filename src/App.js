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
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [theme, setTheme] = useState(getTheme(THEMES.BASIC));
  const toggleTheme = (theme) => {
    setTheme(theme);
  };

  return (
    <ThemesContext.Provider value={{ toggleTheme: toggleTheme }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <SideNavProvider>
          <ToastContainer />
          <NavBar />
          <Layout>
            <Router />
          </Layout>
        </SideNavProvider>
      </ThemeProvider>
    </ThemesContext.Provider>
  );
}

export default App;
