import React from 'react';
import { render } from 'react-dom';


import App from './App';
import userData from './userData.json';

render(<App userData = {userData} />, document.getElementById('root'));
