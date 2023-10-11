import React, { useEffect, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { fetchContacts } from './redux/operations';
// import { selectContact, selectIsLoading } from 'redux/selectors';
// import ContactForm from './components/ContactForm/ContactForm';
// import ContactList from 'components/ContactList/ContactList';
// import Filter from './components/ContactList/Filter/Filter';
import Layout from './components/Layout';
// import styles from './App.module.css';

import { PrivateRoute } from './components/PrivateRoute';
import { RestrictedRoute } from './components/RestrictedRoute';
import { refreshUser } from './redux/auth/operationsAuth';
import { useAuth } from './hooks/useAuth';

const LazyHomePage = lazy(() => import('./pages/HomePage/HomePage'));
const LazyRegisterPage = lazy(() =>
  import('./pages/RegisterPage/RegisterPage')
);
const LazyLoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const LazyContactsPage = lazy(() => import('./pages/ContactsPage/ContactPage'));

export const App = () => {
  const dispatch = useDispatch();
  // const { isLoggedIn } = useAuth();
  // const contacts = useSelector(selectContact);
  // const isLoading = useSelector(selectIsLoading);
  const { isRefreshing } = useAuth();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  // !  refresh user
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    //  <Suspense fallback={<p>Loading contacts...</p>}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<LazyHomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<LazyRegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<LazyLoginPage />}
            />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute
              redirectTo="/login"
              component={<LazyContactsPage />}
            />
          }
        />
      </Route>
    </Routes>
  );
};
