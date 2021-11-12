import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import Loading from './components/Loading';

import { HOME_PAGE, LOGIN_PAGE, PANEL_PAGE, PANEL_DEVICE_PAGE, PANEL_TICKET_PAGE, PANEL_CREATE_DEVICE_PAGE } from './constants/urls';

import store from './store/store';
import configureAxios from './utils/configureAxios';

import reportWebVitals from './reportWebVitals';

import './index.css';

const HomePage = React.lazy(() => import('./views/HomePage'));
const LoginPage = React.lazy(() => import('./views/LoginPage'));
const PanelPage = React.lazy(() => import('./views/PanelPage'));
const PanelDevicePage = React.lazy(() => import('./views/PanelDevicePage'));
const PanelTicketPage = React.lazy(() => import('./views/PanelTicketPage'));
const CreateNewDevicePage = React.lazy(() => import('./views/CreateNewDevicePage'));

configureAxios();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Routes>
            <Route path={HOME_PAGE} element={
              <Suspense fallback={<Loading />}>
                <HomePage />
              </Suspense>
            } 
            />
            <Route path={LOGIN_PAGE} element={
                <Suspense fallback={<Loading />}>
                  <LoginPage />
                </Suspense>
              } 
            />
            <Route path={PANEL_PAGE} element={
                <Suspense fallback={<Loading />}>
                  <PanelPage />
                </Suspense>
              } 
            />
            <Route path={PANEL_DEVICE_PAGE} element={
                <Suspense fallback={<Loading />}>
                  <PanelDevicePage />
                </Suspense>
              } 
            />
            <Route path={PANEL_TICKET_PAGE} element={
                <Suspense fallback={<Loading />}>
                  <PanelTicketPage />
                </Suspense>
              } 
            />
            <Route path={PANEL_CREATE_DEVICE_PAGE} element={
                <Suspense fallback={<Loading />}>
                  <CreateNewDevicePage />
                </Suspense>
              } 
            />
            <Route path="*" element={<div>Brak strony</div>} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
