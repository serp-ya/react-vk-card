import React from 'react';
import theme from './assets/react-toolbox/theme';
import './assets/react-toolbox/theme.css'

import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import VkCard from './VkCard';

export default (props) => (
  <ThemeProvider theme={theme}>
    <VkCard { ...props } />
  </ThemeProvider>
);
