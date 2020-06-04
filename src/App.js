import React from 'react';
import './App.css';

import Timer from './components/Timer';

import { Card } from '@shopify/polaris'

function App() {
  return (
    <div className="card app-content mx-auto">
      <div className="card-body">
        <Timer />
      </div>
    </div >
  );
}

export default App;
