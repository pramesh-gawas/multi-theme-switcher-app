// src/themes/index.ts
import { ThemeStyles } from '../types/theme';

export const theme1: ThemeStyles = {
  colors: {
    primary: '#4CAF50',
    secondary: '#FFC107', 
    background: '#F8F8F8', 
    text: '#333333',
    buttonBg: '#4CAF50',
    buttonText: '#FFFFFF',
  },
  layout: {
    headerHeight: '80px',
    contentPadding: '10px',
    marginBlockStart:"68px"  },
  fonts: {
    body: 'sans-serif,Arial',
    heading: 'Helvetica, sans-serif',
    button: 'Arial, sans-serif',
    bodySize: '16px',
    headingSize: '32px',
  },
  borderRadius: '4px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  headerPosition: 'fixed',
  flexDirection: 'column', 
};

export const theme2: ThemeStyles = {
  colors: {
    primary: '#BB86FC',
    secondary: '#03DAC6', 
    background: '#121212', 
    text: '#E0E0E0',
    buttonBg: '#BB86FC',
    buttonText: '#FFFFFF',
  },
  layout: {
    headerHeight: '160px',
    sidebarWidth: '250px', 
    contentPadding: '10px',
     marginBlockStart:"30px"
  },
  fonts: {
    body: 'Georgia, serif',
    heading: 'Playfair Display, serif',
    button: 'Georgia, serif',
    bodySize: '18px',
    headingSize: '36px',
  },
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
  headerPosition: 'fixed',
  flexDirection: 'row', 
};

export const theme3: ThemeStyles = {
  colors: {
    primary: '#FF6F61', 
    secondary: '#6B5B95', 
    background: '#FFFDD0',
    text: '#36454F',
    cardBackground: '#FFD700', 
    buttonBg: '#FF6F61',
    buttonText: '#FFFFFF',
  },
  layout: {
    headerHeight: '80px',
    contentPadding: '10px',
    gridGap: '20px',
    marginBlockStart:"68px"
  },
  fonts: {
    body: 'Comic Sans MS, cursive', 
    heading: 'Pacifico, cursive',
    button: 'Comic Sans MS, cursive',
    bodySize: '15px',
    headingSize: '40px',
  },
  borderRadius: '16px', 
  boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
  headerPosition: 'fixed',
  flexDirection: 'column',
};

export const themes = {
  theme1,
  theme2,
  theme3,
};