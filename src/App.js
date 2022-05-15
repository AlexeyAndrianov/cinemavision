import React from 'react';
import Counter from './components/Counter'
import SearchInput from './components/SearchInput'
import GenreToggle from './components/GenreToggle'

function App() {
  const footer = React.createElement('footer', null, 'Footer with createElement')
  return (
    <div className="App">
      <div>
        <Counter />
        <SearchInput />
        <GenreToggle />
      </div>
      { footer }
    </div>
  );
}

export default App;
