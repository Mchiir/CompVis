import React, { useState } from 'react';
import axios from 'axios';
// import './App.css';

import Register from './Register/register.js';
import List from './Lists/List.js';
import Edit from './Edit/Edit.js';

function App() {
  return(
    <>
    <div>
      <Edit userData={{firstName:"Mugisha"}}/>
    </div>
    </>
  );
};

export default App;