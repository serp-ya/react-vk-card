import React from 'react';
import VkCard from './Component/VkCard/VkCard';
import theme from './assets/react-toolbox/theme';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import './assets/react-toolbox/theme.css'
export default (props) => (
  <ThemeProvider theme={theme}>
    <VkCard { ...props } />
  </ThemeProvider>
);
