import { useState } from 'react'
import Header from './components/Header.jsx';
import Card from './components/Card.jsx';

function App() {
  return (
    <div>
      <Header></Header>
      <Card head = "Efficient Matrimony" text = "lorem ipsum dolmet"></Card>
    </div>
  );
}

export default App;
