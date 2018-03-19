import React from 'react';
import { render } from 'react-dom';

import userData from './userData.json';
import App from './App';

render(<App userData = {userData} />, document.getElementById('root'));
