import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthContextProvider } from './context/AuthContext';
import App from './App';
import { ToastContainer } from 'react-toastify';

ReactDOM.render(
  <React.StrictMode>
  <AuthContextProvider>
    <App />
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

