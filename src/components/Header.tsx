// src/components/Header.tsx
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ThemeStyles } from "../types/theme";
import { useTheme } from "../context/ThemeContext";
import { ThemeName } from "../types/theme";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeStyles {}
}

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${(props) => props.theme.layout.headerHeight};
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.buttonText};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-shadow: ${(props) => props.theme.boxShadow};
  z-index: 1000;
  transition: all 0.5s ease; /* Subtle animation for header */

  h1 {
    margin: 0;
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: 24px;
  }

  img {
    height: 30px;
    width: 30px;
  }

  nav {
    display: flex;
    gap: 20px;
  }

  a {
    color: ${(props) => props.theme.colors.buttonText};
    text-decoration: none;
    font-family: ${(props) => props.theme.fonts.body};
    font-size: 16px;
    &:hover {
      text-decoration: underline;
    }
  }

  select {
    padding: 5px 10px;
    border-radius: ${(props) => props.theme.borderRadius};
    border: 1px solid ${(props) => props.theme.colors.buttonText};
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.buttonText};
    font-family: ${(props) => props.theme.fonts.body};
    cursor: pointer;
    transition: all 0.3s ease;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    height: auto;
    padding: 10px;
    h1 {
      font-size: 20px;
      margin-bottom: 10px;
    }

    nav {
      flex-direction: column;
      gap: 5px;
      margin-bottom: 10px;
    }
    select {
      width: 100%;
    }
  }
`;

export const Header: React.FC = () => {
  const { currentThemeName, setTheme } = useTheme();

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value as ThemeName);
  };

  return (
    <HeaderContainer>
      <h1>
        <a href="/">
          <img src="/favicon.png" alt="Mainlogo" />
          ShopEase
        </a>
      </h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <select value={currentThemeName} onChange={handleThemeChange}>
        <option value="theme1">Theme 1 (Minimalist)</option>
        <option value="theme2">Theme 2 (Dark Mode)</option>
        <option value="theme3">Theme 3 (Colorful Cards)</option>
      </select>
    </HeaderContainer>
  );
};
