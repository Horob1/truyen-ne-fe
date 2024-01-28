import React from 'react';
import App from './App.jsx';
import { Route, Routes } from 'react-router-dom';
import { LogInPage } from './components/loginPage/LogInPage.jsx';
import { RegisterPage } from './components/registerPage/registerPage.jsx';
import { HomePage } from './components/homePage/HomePage.jsx';
import { ForgotPwdPage } from './components/forgotPwdPass/ForgotPwdPage.jsx';
import { ToastContainer } from 'react-toastify';

export const Layout = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="up-load"></Route>
          <Route path="novels" />
          <Route path="novel" />
          <Route index element={<HomePage />} />
        </Route>
        <Route path="log-in" element={<LogInPage />}></Route>
        <Route path="register" element={<RegisterPage />}></Route>
        <Route path="forgot-pwd" element={<ForgotPwdPage />}></Route>
      </Routes>
      <ToastContainer />
    </>
  );
};
