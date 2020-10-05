import React from 'react';

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <div className = "container-fluid">
        <Header/>
        <Main/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
