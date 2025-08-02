import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { useTheme } from "./context/ThemeContext";
import { ThemeStyles } from "./types/theme";

const PageWrapper = styled.div<{ theme: ThemeStyles }>`
  padding-top: ${(props) => props.theme.layout.headerHeight};
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  min-height: calc(100vh - ${(props) => props.theme.layout.headerHeight});
  transition: background-color 0.5s ease, color 0.5s ease;
  display: flex;
  flex-direction: ${(props) => props.theme.flexDirection};

  @media (max-width: 768px) {
    flex-direction: column;
    padding-top: ${(props) =>
      props.theme.layout.headerHeight}; /* Ensure header space */
  }
`;

// Styled component for the main content area
const MainContent = styled.main<{ theme: ThemeStyles }>`
  flex-grow: 1; /* Allows main content to take available space */
  padding: ${(props) => props.theme.layout.contentPadding};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fonts.bodySize};
  transition: padding 0.5s ease, font-size 0.5s ease;
  overflow-x: hidden;

  /* Responsive adjustments for content padding */
  @media (max-width: 768px) {
    padding: calc(
      ${(props) => props.theme.layout.contentPadding} / 2
    ); /* Reduce padding on mobile */
  }
`;

const Sidebar = styled.aside<{ theme: ThemeStyles }>`
  width: ${(props) => props.theme.layout.sidebarWidth || "0"};
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.buttonText};
  padding: ${(props) =>
    props.theme.layout.sidebarWidth ? props.theme.layout.contentPadding : "0"};
  transition: width 0.5s ease, padding 0.5s ease, background-color 0.5s ease;
  overflow: hidden;
  flex-shrink: 0;

  /* Responsive adjustments for sidebar */
  @media (max-width: 768px) {
    width: auto;
    height: ${(props) => (props.theme.layout.sidebarWidth ? "auto" : "0")};
    padding: ${(props) =>
      props.theme.layout.sidebarWidth
        ? `calc(${props.theme.layout.contentPadding} / 2)`
        : "0"};
    order: -1;
  }
`;

// Main App Component
function App() {
  const { currentTheme } = useTheme();

  return (
    <>
      <Header />
      <PageWrapper theme={currentTheme}>
        {currentTheme.layout.sidebarWidth && (
          <Sidebar theme={currentTheme}>
            <h3>Navigation</h3>
            <ul>
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
            </ul>
          </Sidebar>
        )}

        <MainContent theme={currentTheme}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </MainContent>
      </PageWrapper>
    </>
  );
}

export default App;
