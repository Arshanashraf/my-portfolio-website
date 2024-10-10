import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/store.ts';
import { HashRouter } from 'react-router-dom'; // Use HashRouter

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <HashRouter> {/* Wrap the App in HashRouter */}
        <App />
      </HashRouter>
    </Provider>
  </StrictMode>
);
