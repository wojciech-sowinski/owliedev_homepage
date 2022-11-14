import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { createI18n, I18nProvider, useI18n } from 'react-simple-i18n'
import App from './App';
//data
import langData from './languages/languages';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <BrowserRouter>
    <I18nProvider i18n={createI18n(langData, { lang: 'pl' })}>
      <App />
    </I18nProvider>
  </BrowserRouter>
);

