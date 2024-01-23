import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LogInPage } from './components/loginPage/LogInPage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="up-load"></Route>
        </Route>
        <Route path="log-in" element={<LogInPage />}></Route>
        <Route path="register"></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
