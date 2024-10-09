import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store.ts';
import Home from './Pages/Home.tsx';
import About from './Pages/About.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import { HashRouter, Route, Routes } from 'react-router-dom';
// import App from './App.tsx';
// import Home from './Pages/Home.tsx';
// import About from './Pages/About.tsx';

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <HashRouter>
//       <Routes>
//         <Route path="/" element={<App />}>
//           <Route index element={<Home />} />
//           <Route path="about" element={<About />} />
//         </Route>
//       </Routes>
//     </HashRouter>
//   </StrictMode>
// );
