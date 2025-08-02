// src/pages/About.tsx
import React from "react";
import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";

const AboutSection = styled.section`
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
  }

  /* Responsive adjustments */
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

export const About: React.FC = () => {
  const { currentTheme } = useTheme();
  return (
    <AboutSection theme={currentTheme}>
      <h2>About Our Multi-Theme App</h2>
      <p>
        This application is designed to demonstrate dynamic theming capabilities
        in React. We believe in providing users with a personalized experience,
        allowing them to choose a visual style that best suits their
        preferences. Our goal is to showcase how themes can go beyond just
        colors, affecting the entire structure and feel of an application.
      </p>
      <p>
        Built with React, TypeScript, and styled-components, this project
        highlights best practices in state management (Context API), routing
        (React Router), and responsive design.
      </p>
    </AboutSection>
  );
};
