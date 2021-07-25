import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AllPiecesProvider} from "./Providers/AllPieces"

ReactDOM.render(
  <React.StrictMode>
    <AllPiecesProvider key={"PieceProvider"}>
      <App />
    </AllPiecesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
