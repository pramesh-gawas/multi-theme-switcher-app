// src/pages/Contact.tsx
import React from "react";
import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";

const ContactSection = styled.section`
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
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    margin-bottom: 10px;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    margin-block-start: ${(props) => props.theme.layout.marginBlockStart};
    padding: calc(${(props) => props.theme.layout.contentPadding} / 2);
    h2 {
      font-size: calc(${(props) => props.theme.fonts.headingSize} * 0.8);
    }
    li {
      font-size: calc(${(props) => props.theme.fonts.bodySize} * 0.9);
    }
  }
`;

export const Contact: React.FC = () => {
  const { currentTheme } = useTheme();
  return (
    <ContactSection theme={currentTheme}>
      <h2>Get in Touch</h2>
      <p>We'd love to hear from you! Here's how you can reach us:</p>
      <ul>
        <li>
          <strong>Email:</strong> info@multi-theme-app.com
        </li>
        <li>
          <strong>Phone:</strong> +1 (123) 456-7890
        </li>
        <li>
          <strong>Address:</strong> 123 Theme Street, React City, TS 98765
        </li>
      </ul>
      <p>
        Our team is available Monday to Friday, 9 AM - 5 PM (Your Time Zone).
      </p>
    </ContactSection>
  );
};
