// eslint-disable-next-line no-unused-vars
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
import { SearchPage } from './components/searchPage/SearchPage.jsx';
import { AuthorPage } from './components/authorPage/AuthorPage.jsx';
export const Layout = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="novel/search" element={<SearchPage />} />
          <Route path="user" element={<UserPage />}>
            <Route path="profile" element={<Profile />} />
            <Route path="change-password" element={<ChangePwdForm />} />
            <Route path="my-collection" element={<Collections />} />
          </Route>
        </Route>
        <Route path="up-load"></Route>
        <Route path="admin"></Route>
        <Route path="author/:aSlug" element={<AuthorPage />} />

        <Route path="novel/:nSlug"></Route>

        <Route path="log-in" element={<LogInPage />}></Route>
        <Route path="register" element={<RegisterPage />}></Route>
        <Route path="forgot-pwd" element={<ForgotPwdPage />}></Route>
      </Routes>
      <ToastContainer />
    </>
  );
};
