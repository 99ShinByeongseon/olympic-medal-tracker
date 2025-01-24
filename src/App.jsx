import { useState } from 'react';
import './App.css';
import { EmptyText } from './components/EmptyText';
import { MedalForm } from './components/MedalForm';
import { MedalList } from './components/MedalList';

function App() {
  const [medals, setMedals] = useState([]);

  const handleAdd = (newItem) => {
    setMedals((prev) => [...prev, newItem]);
  };

  const handleDelete = (country) => {
    setMedals((prev) => prev.filter((item) => item.country !== country));
  };

  return (
    <div className='container'>
      <MedalForm onAdd={handleAdd} />
      <EmptyText isEmpty={medals.length === 0} />
      <MedalList medals={medals} onDelete={handleDelete} />
    </div>
  );
}

export default App;
