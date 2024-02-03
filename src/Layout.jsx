import React from 'react';
import App from './App.jsx';
import { Route, Routes } from 'react-router-dom';
import { LogInPage } from './components/loginPage/LogInPage.jsx';
import { RegisterPage } from './components/registerPage/registerPage.jsx';
import { HomePage } from './components/homePage/HomePage.jsx';
import { ForgotPwdPage } from './components/forgotPwdPass/ForgotPwdPage.jsx';
import { ToastContainer } from 'react-toastify';
import { UserPage } from './components/userPage/UserPage.jsx';
import { Profile } from './components/userPage/Profile.jsx';
import { Collections } from './components/userPage/Collections.jsx';
import { ChangePwdForm } from './components/userPage/ChangePwdForm.jsx';
import { InforPage } from './components/inforPage/InforPage.jsx';
import { ReadingPage } from './components/readingPage/ReadingPage.jsx';

export const Layout = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="user" element={<UserPage />}>
            <Route path="profile" element={<Profile />} />
            <Route path="change-password" element={<ChangePwdForm />} />
            <Route path="my-collection" element={<Collections />} />
          </Route>
        </Route>
        <Route path="up-load"></Route>
        <Route path="admin"></Route>

        <Route path="novel/:nSlug" element={<InforPage />}></Route>
        <Route path="novel/:nSlug/:cSlug" element={<ReadingPage />}></Route>

        <Route path="log-in" element={<LogInPage />}></Route>
        <Route path="register" element={<RegisterPage />}></Route>
        <Route path="forgot-pwd" element={<ForgotPwdPage />}></Route>
      </Routes>
      <ToastContainer />
    </>
  );
};
