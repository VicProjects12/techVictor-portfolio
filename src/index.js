import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';



if (process.env.NODE_ENV === 'production') {
  // Check if the app is deployed on GitHub Pages
  const scriptTags = document.getElementsByTagName('script');
  for (let i = 0; i < scriptTags.length; i++) {
    if (scriptTags[i].src.includes('techVictor-portfolio')) {
      window.__PUBLIC_URL__ = '/techVictor-portfolio';
      break;
    }
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
