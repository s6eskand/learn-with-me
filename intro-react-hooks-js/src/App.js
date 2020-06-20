import React from 'react';
import './App.css'; // base styles
import 'semantic-ui-css/semantic.min.css' // default Semantic UI theme
import ListMovies from "./components/ListMovies"; // ListMovies Component

function App() {
  return (
    <div>
      <ListMovies title="test" />
    </div>
  );
}

export default App;
