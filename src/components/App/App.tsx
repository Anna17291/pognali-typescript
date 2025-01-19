import React from 'react';
import { Route, Routes, HashRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute } from '../../const';
import MainPage from '../../pages/MainPage/MainPage';
import Catalog from '../../pages/Catalog/Catalog';
import Form from '../../pages/Form/Form';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import { getErrorStatus } from '../../store/europe-data/europe-data.selectors';
import { useAppSelector } from '../../hooks';

function App() {

  const hasError = useAppSelector(getErrorStatus);

  if (hasError) {
    return <ErrorPage />;
  }

  return (
    <HelmetProvider>
      <HashRouter>
        <Routes>
          <Route path={AppRoute.Root} element={<MainPage />} />
          <Route path={AppRoute.Main} element={<MainPage />} />
          <Route path={AppRoute.Catalog} element={<Catalog />} />
          <Route path={AppRoute.Form} element={<Form />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </HashRouter>
    </HelmetProvider>
  );
}

export default App;
