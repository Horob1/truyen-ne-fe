import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LogInPage } from './components/loginPage/LogInPage.jsx';
import { RegisterPage } from './components/registerPage/registerPage.jsx';
import { HomePage } from './components/homePage/HomePage.jsx';
import { ForgotPwdPage } from './components/forgotPwdPass/ForgotPwdPage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="up-load">
          
          </Route>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="log-in" element={<LogInPage />}></Route>
        <Route path="register" element={<RegisterPage />}></Route>
        <Route path="forgot-pwd" element={<ForgotPwdPage />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
