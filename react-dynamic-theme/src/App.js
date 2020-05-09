import Head from './components/Head';
import Header from './components/Header';
import Pages from './pages/Pages';
import PagesContextProvider from './contexts/PagesContext';
import React from 'react';
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Head />
        <PagesContextProvider>
          <Header />
          <Pages />
        </PagesContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;