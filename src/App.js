import React from 'react';
import MainRouter from './routes';

function App () {
    return (
    <div className="wrapper">
      <main className="main">
        <div className="content">
          <MainRouter />
        </div>
      </main>
    </div>
    );
  }

export default App;