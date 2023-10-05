import React, { useEffect, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/operations';
import { selectContact, selectIsLoading } from 'redux/selectors';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from './components/ContactList/Filter/Filter';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import Layout from './components/Layout';
import styles from './App.module.css';
import { PrivateRoute } from './components/PrivateRoute';
import { RestrictedRoute } from './components/RestrictedRoute';
import refreshUser from './redux/auth/operationsAuth';
import { useAuth } from './hooks/useAuth';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
// const RegisterForm = lazy(() => import('./pages/RegisterPage/RegisterPage'));
// const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));

export default function App() {
  const dispatch = useDispatch();
  // const { isLoggedIn } = useAuth();
  // const contacts = useSelector(selectContact);
  // const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // !  refresh user
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div className="App">
      {/* <div className={styles.phonebook}>
        <h1>Phonebook</h1>
        <ContactForm />
      </div>

      <div className={styles.contacts}>
        <h2>Contacts</h2>
        <Filter />

        {isLoading ? (
          <p>Loading Contacts</p>
        ) : (
          <ContactList contacts={contacts} />
        )}
      </div> */}
      {/* <Suspense fallback={<p>Loading contacts...</p>}> */}
      isRefreshing ? (<b>Refreshing user...</b>) : (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Route>
      </Routes>
    </div>
  );
}
