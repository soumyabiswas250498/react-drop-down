import React from 'react';
import Menu from './menu/Menu';


function App() {
  return (
    <div className='flex items-center justify-center w-full h-screen'>
      <div className='flex items-center gap-2 px-4 border border-blue-400'>
        <h1>Hello</h1>
        <Menu />

      </div>
    </div>
  );
}

export default App;
