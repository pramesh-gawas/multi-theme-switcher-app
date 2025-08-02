
export interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  cardBackground?: string;
  buttonBg?: string;
  buttonText?: string;
}

export interface ThemeLayout {
  headerHeight: string;
  sidebarWidth?: string; 
  contentPadding: string;
  gridGap?: string;
  marginBlockStart?:string
  
}

export interface ThemeFonts {
  body: string;
  heading: string;
  button: string;
  bodySize: string;
  headingSize: string;
}

export interface ThemeStyles {
  colors: ThemeColors;
  layout: ThemeLayout;
  fonts: ThemeFonts;
  borderRadius?: string;
  boxShadow?: string;
  headerPosition?: 'fixed' | 'relative';
  flexDirection?: 'row' | 'column'; 
}

export type ThemeName = 'theme1' | 'theme2' | 'theme3';