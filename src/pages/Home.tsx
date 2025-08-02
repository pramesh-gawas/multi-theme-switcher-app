// src/pages/Home.tsx
import React from "react";
import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";
import { ProductList } from "../components/ProductList"; // Component for API data

const PageSection = styled.section`
  padding: ${(props) => props.theme.layout.contentPadding};
  font-family: ${(props) => props.theme.fonts.body};
  color: ${(props) => props.theme.colors.text};
  transition: all 0.5s ease;

  h2 {
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: ${(props) => props.theme.fonts.headingSize};
    color: ${(props) => props.theme.colors.primary};
    margin-bottom: 20px;
    transition: all 0.5s ease;
  }

  p {
    line-height: 1.6;
    margin-bottom: 20px;
  }

  button {
    background-color: ${(props) => props.theme.colors.buttonBg};
    color: ${(props) => props.theme.colors.buttonText};
    font-family: ${(props) => props.theme.fonts.button};
    padding: 10px 20px;
    border: none;
    border-radius: ${(props) => props.theme.borderRadius};
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      opacity: 0.9;
    }
  }

  @media (max-width: 768px) {
    margin-block-start: ${(props) => props.theme.layout.marginBlockStart};
    padding: calc(${(props) => props.theme.layout.contentPadding} / 2);
    h2 {
      font-size: calc(${(props) => props.theme.fonts.headingSize} * 0.8);
    }
    p {
      font-size: calc(${(props) => props.theme.fonts.bodySize} * 0.9);
    }
  }
`;

export const Home: React.FC = () => {
  const { currentTheme, currentThemeName } = useTheme();

  return (
    <PageSection theme={currentTheme}>
      <h2>
        Welcome to Our{" "}
        {currentThemeName === "theme1"
          ? "Minimalist"
          : currentThemeName === "theme2"
          ? "Dark"
          : "Colorful"}{" "}
        Homepage!
      </h2>
      <p>
        This is a sample paragraph demonstrating how the text, font, and spacing
        change with different themes. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <button>Explore Features</button>
      <h3
        style={{
          fontFamily: currentTheme.fonts.heading,
          color: currentTheme.colors.primary,
          marginTop: "40px",
        }}
      >
        Products
      </h3>
      <ProductList />
    </PageSection>
  );
};
